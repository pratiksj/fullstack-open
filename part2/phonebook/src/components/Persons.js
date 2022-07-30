const Persons = ({ name }) => {
  return (
    <>
      <div>
        {name.map((y) => (
          <li key={y.Id}>
            {y.name}
            {y.Number}
          </li>
        ))}
      </div>
    </>
  );
};
export default Persons;
