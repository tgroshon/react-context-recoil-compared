import React from "react";
import Spreadsheet from "./Spreadsheet";
import { Provider } from "./context";

function App() {
  const size = 6;

  return (
    <div className="App">
      <Provider size={size}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px"
          }}
        >
          <Spreadsheet size={size} />
          <Spreadsheet size={size} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
