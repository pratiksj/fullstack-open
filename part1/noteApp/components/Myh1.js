import React from "react";

const Myh1 = ({ name, lastName }) => {
  //spread gareko already object vitra ko key matra deu vaneko
  //distructure gareko
  //props garnu parena
  //return React.createElement("h1", {}, "This is from REACT H1 Componet");
  return (
    <h1>
      helow {name} {lastName}
    </h1>
  );
};
export default Myh1;
