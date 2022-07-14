import StatisticLine from "./Statisticline";
const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good:{props.good}</p>
      <p>Neutral:{props.neutral}</p>
      <p>Bad:{props.bad}</p>
      <p>All:{props.sumAllFunc()}</p>
      <p>Average:{props.averageFunc()}</p>
      <p>Positive:{props.positiveFunc()}</p>
    </div>
  );
};
export default Statistics;
