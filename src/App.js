import React, { useMemo, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TotalStats from "./Components/totals/TotalStats";
import States from "./Components/states/States";
import { CasesContext } from "./Helper/Context";
function App() {
  const [data, setData] = useState([]);
  const [states, setStates] = useState([]);

  useMemo(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://covidnigeria.herokuapp.com/api", {
      signal: signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setData([data.data]);
        setStates(data.data.states);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log(err.name);
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <CasesContext.Provider value={{ data, states }}>
      <div className="App">
        <Header />
        <div className="px-20 md:px-32 pt-10">
          <TotalStats />
          <div className="banner"></div>
          <States />
        </div>
      </div>
    </CasesContext.Provider>
  );
}

export default App;

