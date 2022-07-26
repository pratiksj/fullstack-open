import { useState } from "react"; //useState bhaneko hook
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const goodfunc = () => {
    setGood(good + 1);
  };
  const [neutral, setNeutral] = useState(0);
  const neuFunc = () => {
    setNeutral(neutral + 1);
  };
  const [bad, setBad] = useState(0);
  const badFunc = () => {
    setBad(bad + 1);
  };
  // const sumAllFunc = () => {
  //   return good + neutral + bad;
  // };
  // const averageFunc = () => {
  //   return (good - bad) / sumAllFunc();
  // };
  // const positiveFunc = () => {
  //   return (good / sumAllFunc()) * 100 + "%";
  // };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button goodfunc={goodfunc} neuFunc={neuFunc} badFunc={badFunc} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
    // sumAllFunc={sumAllFunc}
    // averageFunc={averageFunc}
    // positiveFunc={positiveFunc}
  );
};
export default App;
