import { useState } from "react";
import "./App.css";
import Game from "./component/Game/Game";
import HomePage from "./component/HomePage";

function App() {
  const [toggle,setToggle]= useState(false)
  return (
  <>{toggle?
    <Game/>:
    <HomePage toggle={(val)=>setToggle(val)}/>

  }
  </>
  );
}

export default App;
