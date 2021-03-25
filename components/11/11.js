import React, { useState } from "react";

function sayHello() {
  alert('You clicked me!');
}
// Usage
//<button onClick={sayHello}>Default</button>;
function clickMe() {
  alert("SAVE CHANGES TO DB");
}

function clickMe2() {
  alert("Order Confirmed");
}


export default function App() {
  return (
    <>
      <div>
        <button onClick={clickMe}>Save Changes</button>
      </div>
      <div>
        <button theme="pink" onClick={clickMe2}>
          Confirm Order
        </button>
      </div>
    </>
  );
}