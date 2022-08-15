const Button = (props) => {
  return (
    <div>
      <button onClick={props.function}>{props.buttonName} </button>
    </div>
  );
};
export default Button;
