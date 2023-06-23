import React, { useState } from "react";
import Button from "./components/Button";
 
function App() {
 const [display, setDisplay] = useState("0");
 const [equation, setEquation] = useState()
 return (
  <div className="App">
   <div className="calculator">
    <div className="display">{display}</div>
    <div className="buttons">
     <div className="buttonContainer">
      <Button text="AC" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="+/-" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="%" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="÷" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
     </div>
     <div className="buttonContainer">
      <Button text="7" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="8" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="9" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="x" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
     </div>
     <div className="buttonContainer">
      <Button text="4" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="5" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="6" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="-" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
     </div>
     <div className="buttonContainer">
      <Button text="1" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="2" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="3" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="+" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
     </div>
     <div className="buttonContainer">
      <Button text="0" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="." display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
      <Button text="=" display={display} setDisplay={setDisplay} equation={equation} setEquation={setEquation} />
     </div>
    </div>
   </div>
  </div>
 );
}
 
export default App;