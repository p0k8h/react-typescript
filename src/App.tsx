import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Task from "./Component/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Task />
        <ToastContainer autoClose={2000} />
      </header>
    </div>
  );
};

export default App;
