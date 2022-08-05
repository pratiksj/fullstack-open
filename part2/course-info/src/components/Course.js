import Header from "./Header";
const Course = ({ course }) => {
  //const result = course.parts.map((note) => note.name);
  //console.log(result);
  return (
    <>
      <Header head={"Web developement Curriculum"} />
      <h1>{course[0].name}</h1>
      <>
        {course[0].parts.map((note) => (
          <p key={note.id}>
            {note.name}
            {note.exercises}
          </p>
        ))}
      </>
      <h1>
        total of
        {course[0].parts.reduce((s, p) => {
          return s + p.exercises;
        }, 0)}
        exercises
      </h1>
      <h2>{course[1].name}</h2>
      <>
        {course[1].parts.map((x) => (
          <p key={x.id}>
            {x.name}
            {x.exercises}
          </p>
        ))}
      </>
      <h1>
        total of
        {course[1].parts.reduce((a, b) => a + b.exercises, 0)} exercises
      </h1>

      {/* <Part parts={props.parts} /> */}
    </>
  );
};
export default Course;
