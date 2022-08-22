import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TotalStats from "./Components/totals/TotalStats";
import States from "./Components/states/States";
import { CasesContext } from "./Helper/Context";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
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

  // timeout for loading state
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <CasesContext.Provider value={{ data, states }}>
      {loading ? (
        <div className="loading-state flex justify-center pt-32">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_v1c99zh5.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      ) : (
        <div className="App">
          <Header />
          <div className="px-20 md:px-32 pt-10">
            <TotalStats />
            <div className="banner"></div>
            <States />
          </div>
        </div>
      )}
    </CasesContext.Provider>
  );
}

export default App;

