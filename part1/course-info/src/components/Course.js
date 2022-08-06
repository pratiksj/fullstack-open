import Part from "./Part";

const Course = ({ parts }) => {
  //console.log(parts);
  //console.log(props.part1.name);
  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </>
  );
};
export default Course;
