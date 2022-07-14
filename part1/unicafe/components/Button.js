const Button = (props) => {
  return (
    <div>
      <button onClick={props.goodfunc}>Good </button>&nbsp;&nbsp;
      <button onClick={props.neuFunc}>Neutral</button>&nbsp;&nbsp;
      <button onClick={props.badFunc}>Bad</button>
    </div>
  );
};
export default Button;
