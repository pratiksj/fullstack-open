const PersonForm = (props) => {
  return (
    <>
      <form onSubmit={props.addNote}>
        <div>
          name:
          <input value={props.newname} onChange={props.handlechange} />
        </div>
        <div>
          numbers:
          <input value={props.num} onChange={props.handleNum} />
        </div>
        <div>
          <button type="submit">Sumbit</button>
        </div>
      </form>
    </>
  );
};
export default PersonForm;
