import React from "react";

const Myh1 = ({ name, lastName, count, count1 }) => {
  //spread gareko already object vitra ko key matra deu vaneko
  //distructure gareko
  //props garnu parena
  //return React.createElement("h1", {}, "This is from REACT H1 Componet");
  //console.log(name, lastName, count, count1);
  return (
    <div>
      <h1>
        {/* helow to tej {name} {lastName}
      helow to tej {name} {lastName} {count} */}
        pratikshya {count}
      </h1>

      <h1>{count1}</h1>
    </div>
  );
};
export default Myh1;
