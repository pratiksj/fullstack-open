import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import noteService from "./services/person";
import person from "./services/person";

function App() {
  const [persons, setPerson] = useState([]);

  const [newName, setNewName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [search, setSearch] = useState("");

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
        noteService.update(personExist.id, personExist).then((response) => {
          setPerson(
            persons.map((x) => {
              if (x.name === newName) {
                return { ...x, updatedNum: numbers };
              } else return x;
            })
          );
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
      <h1>Phonebook</h1>
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
      <Persons name={showPersons} setPerson={setPerson} />
    </>
  );
}

export default App;
