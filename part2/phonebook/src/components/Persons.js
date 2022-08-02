const Persons = ({ name }) => {
  return (
    <>
      <div>
        {name.map((y) => (
          <li key={y.id}>
            {y.name}
            {y.number}
          </li>
        ))}
      </div>
    </>
  );
};
export default Persons;
