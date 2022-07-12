import ReactDOM from "react-dom/client";
import App from "./components/App";
//console.log("this is index.js");

//ReactDOM.render(App(), document.querySelector("#root")); ///render dispaly/load garxa
let num = 1;
//let fellow = "tejfellowship";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <App counter={num} />
);

/*const refresh = () =>
  ReactDOM.createRoot(document.querySelector("#root")).render(
    <App counter={num} fellow={fellow} /> //app component  ma property pass gareko ahile ko case ma
  )

setInterval(() => {
  refresh();
  num++;
}, 1000);*/
