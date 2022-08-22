import React, { useMemo, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TotalStats from "./Components/TotalStats";
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
        setData((prevData) => [...prevData, data]);
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
        <TotalStats />
        {data.map((item) => (
          <pre>{item.data.death}</pre>
        ))}
      </div>
    </CasesContext.Provider>
  );
}

export default App;

