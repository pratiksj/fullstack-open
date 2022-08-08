import noteService from "../services/person";

const Persons = ({ name, setPerson }) => {
  return (
    <>
      <div>
        {name.map((y) => (
          <li key={y.id}>
            {y.name}

            {y.number}
            <button
              onClick={() => {
                noteService.remove(y.id).then((response) => {
                  let deleteFilteredName = name.filter(
                    (filname) => filname.id !== y.id
                  );
                  setPerson(deleteFilteredName);
                });
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
