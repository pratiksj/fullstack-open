import ReactDOM from "react-dom/client";
import App from "./components/App";
console.log("this is index.js");

//ReactDOM.render(App(), document.querySelector("#root")); ///render dispaly/load garxa
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
