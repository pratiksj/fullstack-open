import { useState } from "react";

function App() {
  const [persons, setPerson] = useState([{ name: "Pratisha" }]);
  // [{name:'pratiksha'},{name:'niru'}]
  //console.log(persons[0].name);
  const [newName, setNewName] = useState("Niru");

  const addNote = (event) => {
    event.preventDefault();
    //console.log(event.target);
    const newPerson = { name: newName };
    setPerson([...persons, newPerson]);
  };
  const handleOnChange = (event) => {
    setNewName(event.target.value);
    console.log(newName);
  };

  return (
    <>
      <h2>Phonebook</h2>

      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </div>
    </>
  );
}

export default App;
