/*import React from "react"; //
import Myh1 from "./Myh1";

const App = () => {
  return React.createElement("div", {}, [Myh1(), Myh1(), Myh1()]);
};
export default App;*/

import React from "react";
import Myh1 from "./Myh1";
import React, { useState } from "react";

const App = ({ counter }) => {
  const [myCount, setMyCount] = useState(1);

  //const increaseCount = () => setMyCount(myCount + 1);

  //setTimeout(() => {
  //setMyCount(myCount + 1);
  //}, 1000);
  let name1 = "pratiksha";
  let increment = () => setMyCount(myCount + 1);
  let decrement = () => setMyCount(myCount - 1);

  return (
    <div>
      <button onClick={increment}>increase</button> &nbsp; &nbsp;
      <button onClick={decrement}>decrease</button>
      <h1>
        hellow {name1} {myCount}
      </h1>
      <h1>{counter}</h1>
      <Myh1
        //name={name1}
        lastName="somelastname"
        count={myCount}
        count1={counter}
      />
      {/* <Myh1 name="niru" lastName="Magar" count={myCount} />
      <Myh1 name="manjila" lastName="Nepali" count={myCount} /> */}
    </div>
  );
};

export default App;
//arko javascript  file(react.js) bata access garna ko lagi export gareko