const MostVote = (props) => {
  let higherVote = Math.max(...props.newVote); //newvote array ma xa spread le chai array ma vako element lai matra liyo
  let indexOfHigherVote = props.newVote.indexOf(higherVote); //Math.max le chaii high element lai linxa as a number
  let dote = props.anec[indexOfHigherVote]; //highert vote vako statement print garna ko lagi ho

  if (higherVote === 0) {
    return <p>No votes yet</p>;
  }
  return (
    <>
      <p>{dote}</p>
      <p> has{higherVote}votes</p>
    </>
  );
};
export default MostVote;
