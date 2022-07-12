/*import React from "react"; //
import Myh1 from "./Myh1";

const App = () => {
  return React.createElement("div", {}, [Myh1(), Myh1(), Myh1()]);
};
export default App;*/

import React from "react";
import Myh1 from "./Myh1";

const App = () => {
  let name1 = "pratiksha";
  return (
    <div>
      <h1>hellow {name1} </h1>
      <Myh1 name={name1} lastName="somelastname" />
      <Myh1 name="niru" lastName="Magar" />
      <Myh1 name="manjila" lastName="Nepali" />
    </div>
  );
};

export default App;
//arko javascript  file(react.js) bata access garna ko lagi export gareko
