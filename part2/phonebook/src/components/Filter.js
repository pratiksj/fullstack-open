const Filter = ({ find, display }) => {
  return (
    <>
      <h2>
        Filter Show with <input value={find} onChange={display} />
      </h2>
    </>
  );
};
export default Filter;
