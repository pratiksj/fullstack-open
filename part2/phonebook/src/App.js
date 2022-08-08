import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

function App() {
  const [persons, setPerson] = useState([]);

  const [newName, setNewName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
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
    let personExist = persons.some((person) => person.name === newName);
    let numberExist = persons.some((number) => number.Number === numbers);
    if (personExist && numberExist) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: numbers,
        //id: persons.length + 1,
      };
      axios
        .post("http://localhost:3001/persons", newPerson)
        .then((response) => {
          console.log(response);
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
      <Persons name={showPersons} />
    </>
  );
}

export default App;
