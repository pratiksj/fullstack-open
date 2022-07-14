const App = ({ notes }) => {
  // const newFunc = (zee) => {
  //   return (
  //     <div>
  //       <h2>{zee.content}</h2>
  //     </div>
  //   );
  // };

  return (
    <div>
      <h1>hellow world</h1>

      {notes.map((x) => (
        <h2 key={x.id}>{x.content}</h2> //key id halnu parxa dherai list vako case ma
      ))}
    </div>
  );
};
export default App;
