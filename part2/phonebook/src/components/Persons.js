import noteService from "../services/person";

const Persons = ({ name, setPerson }) => {
  const deletedId = (id) => {
    const result = window.confirm("Are you sure ?");
    if (result === false) {
    } else
      noteService.remove(id).then((response) => {
        let deleteFilteredName = name.filter((filname) => filname.id !== id);
        setPerson(deleteFilteredName);
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
                deletedId(y.id);
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
