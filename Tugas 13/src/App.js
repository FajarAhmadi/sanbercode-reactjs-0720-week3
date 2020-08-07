import React from "react";
import "./App.css";
// import HargaBuah from "./tugas11/HargaBuah";
import Timer from "./tugas12/Timer";
import FormBuah from "./tugas14/FormBuahHooks";

function App() {
  return (
    <div className="App">
      {/* <HargaBuah /> */}
      <FormBuah />
      <Timer start={101} />
    </div>
  );
}

export default App;
