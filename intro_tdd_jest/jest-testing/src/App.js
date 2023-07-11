import React, { useState } from "react";

const App = () => {
 const [heading, setHeading] = useState("Logged Out");

 const onClick= () => {
  setHeading("Logged In");
 };

 return (
  <>

   <button type="button" onClick={onClick}>
    Log In
   </button>
   <h1>{heading}</h1>
  </>
 );
};

export const Title = () => {
 return (
  <h1>Hello</h1>
 )}
export default App;