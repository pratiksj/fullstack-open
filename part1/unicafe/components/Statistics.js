import StatisticLine from "./Statisticline";
const Statistics = (props) => {
  let All = props.good + props.bad + props.neutral;

  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else
    return (
      <div>
        <h1>Statistics</h1>
        {/* <p>Good:{props.good}</p>
      <p>Neutral:{props.neutral}</p>
      <p>Bad:{props.bad}</p>
      <p>All:{props.sumAllFunc()}</p>
      <p>Average:{props.averageFunc()}</p>
      <p>Positive:{props.positiveFunc()}</p> */}
        <StatisticLine text="Good" value={props.good} />
        <StatisticLine text="Bad" value={props.bad} />
        <StatisticLine text="Neutral" value={props.neutral} />
        <StatisticLine
          text="All"
          value={props.good + props.bad + props.neutral}
        />
        <StatisticLine text="Average" value={(props.good - props.bad) / All} />
        <StatisticLine text="Positive" value={(props.good / All) * 100 + "%"} />
      </div>
    );
};
export default Statistics;
