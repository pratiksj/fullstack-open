import Part from "./components/part";
const Content = (props) => {
  return (
    //yedi euta  vanda badi element xa vane div tag le enclose garnu paryo/wrap garnu paryo
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  );
};

export default Content;
