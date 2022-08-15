const Notification = ({ message, color }) => {
  if (message === null) {
    return null;
  }

  return (
    <div
      className={
        color === "note" ? "note" : color === "error" ? "error" : "delete"
      }
    >
      {message}
    </div>
  );
};
export default Notification;
