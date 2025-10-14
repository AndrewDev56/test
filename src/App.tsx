import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
// import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        "https://simplylegal.leaddocket.com/api/leads?status=7&page=1&itemsPerPage=500",
        {
          headers: {
            accept: "application/json",
            api_key: "58e1c43e-4a1f-41c5-852b-1116a7a1f482",
          },
        }
      );
      console.log(response);
      // const response = await fetch(
      //   "https://simplylegal.leaddocket.com/api/leads?status=7&page=1&itemsPerPage=500",
      //   {
      //     headers: {
      //       Action: "application/json",
      //       api_key: "58e1c43e-4a1f-41c5-852b-1116a7a1f482",
      //     },
      //   }
      // );
      // console.log(await response.json());
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
