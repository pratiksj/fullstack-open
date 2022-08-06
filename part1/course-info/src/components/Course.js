import Part from "./Part";

const Course = (props) => {
  //console.log(props);
  //console.log(props.part1.name);
  return (
    <>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </>
  );
};
export default Course;
