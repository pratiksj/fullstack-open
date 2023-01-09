import React from "react";

const Part = ({ note }) => {
  return (
    <div>
      {note.name}
      {note.exercises}
    </div>
  );
};

export default Part;
