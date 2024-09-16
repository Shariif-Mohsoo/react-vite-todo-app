// import react from 'react';
import "./components/index.css";
import reactDOM from "react-dom/client";
import App from "./App";
const ele = document.querySelector("#root");
const root = reactDOM.createRoot(ele);
root.render(<App />);
