import Part from "./components/part";
const Content = (props) => {
  return (
    //yedi euta  vanda badi element xa vane div tag le enclose garnu paryo/wrap garnu paryo
    <div>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </div>
  );
};

export default Content;
