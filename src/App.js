import React from "react";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to kohisop</h1>
      <div class="card-body">
        <label htmlFor="serach"> Search: </label>
        <input id="search" type="text"></input>
        <div>Your Location : <b>SLEMAN</b></div>
        <label>Set Filters</label>
        <button class="btn btn-primary">SET</button>
      </div>
    </div>
  );
}

export default App;
