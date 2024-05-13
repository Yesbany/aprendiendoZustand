import { useState } from "react";
import "./App.css";
import { usePersonStore, useStore } from "./globalState/StateGlobal";

function App() {
  const count = useStore((state) => state.count);
  const status = useStore((state) => state.status);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const handleStatusChange = useStore((state) => state.handleStatusChange);

  const { name, lastName, updateName, updateLastName } = usePersonStore();

  const [statusChange, setStatusChange] = useState<string>("");

  return (
    <>
      <div>
        <h1>{status}</h1>
        <input
          onChange={(e) => {
            setStatusChange(e.target.value);
          }}
        />
        <button onClick={() => handleStatusChange(statusChange)}>
          Status Change
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>
      <div>
        <div style={{border: "1px solid red"}}>
          <input type="text" onChange={(e) => updateName(e.target.value)} />
          <h3>Name</h3>
          <label htmlFor="">{name}</label>
        </div><br />
        <div style={{border: "1px solid blue"}}>
          <input type="text" onChange={(e) => updateLastName(e.target.value)} />
          <h3>LastName</h3>
          <label htmlFor="">{lastName}</label>
        </div>
      </div>
    </>
  );
}

export default App;
