import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
//import axios from "axios";
import noteService from "./services/person";
import person from "./services/person";
import Notification from "./components/Notification";

function App() {
  const [persons, setPerson] = useState([]);

  const [newName, setNewName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [search, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    noteService
      .getAll()
      //axios.get("http://localhost:3001/persons")
      .then((response) => {
        //console.dir(response.data);
        setPerson(response.data);
      })
      .catch((error) => console.log("this is error", error));
  }, []);

  const showPersons =
    search === "" ? persons : persons.filter((x) => x.name.includes(search));

  const addNote = (event) => {
    event.preventDefault();
    //console.log(event.target);
    const personExist = persons.find((person) => person.name === newName);
    console.log(person);

    //const numberExist = persons.some((number) => number.number === numbers);
    if (personExist) {
      const result = window.confirm(
        `${newName} is already added to phonebook,replace the old number with newone?`
      );
      if (result) {
        personExist.number = numbers; // ysma hamle naya variab
        noteService
          .update(personExist.id, personExist)
          .then((response) => {
            setPerson(
              persons.map((x) => {
                if (x.name === newName) {
                  return { ...x, updatedNum: numbers };
                } else return x;
              })
            );
            setErrorMessage(`Updated the number for ${personExist.name}`);
            setColor("note");
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000);
          })
          .catch((error) => {
            setErrorMessage(
              `${personExist.name} was already removed from the server`
            );
            setColor("error");
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000);
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: numbers,
        //id: persons.length + 1,
      };

      //axios.post("http://localhost:3001/persons", newPerson)
      noteService.create(newPerson).then((response) => {
        setPerson([...persons, response.data]);
      });
      setErrorMessage("Added " + newPerson.name);
      setColor("note");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };
  const handleOnChange = (event) => {
    setNewName(event.target.value);
    //console.log(newName)
  };
  const handleNumChange = (e) => {
    setNumbers(e.target.value);
  };

  const onTypeShow = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <h1>Heroku Phonebook</h1>
      <Notification message={errorMessage} color={color} />
      <Filter find={search} display={onTypeShow} />

      <h1>Add New Name</h1>
      <PersonForm
        addNote={addNote}
        newname={newName}
        handlechange={handleOnChange}
        num={numbers}
        handleNum={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons
        name={showPersons}
        setPerson={setPerson}
        setErrorMessage={setErrorMessage}
        setColor={setColor}
      />
    </>
  );
}

export default App;
