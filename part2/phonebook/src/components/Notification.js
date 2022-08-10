const Notification = ({ message, color }) => {
  if (message === null) {
    return null;
  }

  return <div className={color === "error" ? "error" : "note"}>{message}</div>;
};
export default Notification;
