const HistoryDisplay = ({ history }) => {
  if (history.length > 0) {
    return <h1>This click will show the history:{history}</h1>;
  } else {
    return <h1>This click will not show the history yet</h1>;
  }
};
export default HistoryDisplay;
