import Header from "./Header";
import Part from "./Part";
const Course = ({ course }) => {
  return (
    <div>
      <h1> Web developement Curriculum</h1>

      <Header course={course[0]} />

      {course[0].parts.map((part) => (
        <Part note={part} key={part.id} />
      ))}
      <h1>
        total of
        {course[0].parts.reduce((s, p) => {
          return s + p.exercises;
        }, 0)}
        exercises
      </h1>

      <Header course={course[1]} />

      {course[1].parts.map((part) => (
        <Part note={part} key={part.id} />
      ))}

      <h1>
        total of
        {course[1].parts.reduce((a, b) => a + b.exercises, 0)} exercises
      </h1>
    </div>
  );
};
export default Course;
