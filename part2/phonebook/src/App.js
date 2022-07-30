import { useState } from "react";
function App() {
  const [persons, setPerson] = useState([
    { name: "Pratisha", Number: 9843866516 },
  ]);
  const [newName, setNewName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [search, setSearch] = useState("");
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
        Number: numbers,
        Id: persons.length + 1,
      };

      setPerson([...persons, newPerson]);
    }
  };
  const handleOnChange = (event) => {
    setNewName(event.target.value);
    //console.log(newName);
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
      <p>
        {" "}
        filter show with <input value={search} onChange={onTypeShow} />
      </p>

      <h1>Add New Name</h1>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          number:
          <input value={numbers} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {showPersons.map((person) => (
          <li key={persons.Id}>
            {person.name}
            {person.Number}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
