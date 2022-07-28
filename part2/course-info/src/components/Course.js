//import Part from "./Part";
const Course = ({ course }) => {
  //const result = course.parts.map((note) => note.name);
  //console.log(result);
  return (
    <>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((note) => (
          <li key={note.id}>
            {note.name}
            {note.exercises}
          </li>
        ))}
      </ul>
      <p>
        total of
        {course.parts.reduce((s, p) => {
          return s + p.exercises;
        }, 0)}
        exercises
      </p>

      {/* <Part parts={props.parts} /> */}
    </>
  );
};
export default Course;
