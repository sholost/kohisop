import logo from './logo.svg';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to kohisop</h1>
      <label htmlFor="serach"> Search: </label>
      <input id="search" type="text"></input>
      <div>Your Location : <b>SLEMAN</b></div>
      <label>Set Filters</label>
      <button> SET </button>
      <div className="container">
      </div>
    </div>
  );
}

export default App;
