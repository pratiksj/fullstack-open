import noteService from "../services/person";

const Persons = ({ name, setPerson, setErrorMessage }) => {
  //console.log(persons);
  const deletedId = (id) => {
    //const result = window.confirm(`Delete${name}`);
    //if (result === false) {} else
    noteService.remove(id).then((response) => {
      let deleteFilteredName = name.filter((filname) => filname.id !== id);
      setPerson(deleteFilteredName);
      setErrorMessage("Deleted");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    });
  };
  return (
    <>
      <div>
        {name.map((y) => (
          <li key={y.id}>
            {y.name}

            {y.number}
            <button
              onClick={() => {
                const result = window.confirm(`Delete  ${y.name} ?`);
                if (result === false) {
                } else deletedId(y.id);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
};
export default Persons;
