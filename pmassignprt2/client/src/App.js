import './App.css';
import OneProduct from './conponents/OneProduct';
import {Routes,Route} from  "react-router-dom";
import Main from "./conponents/Main";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/product/:id" element={<OneProduct/>}/> 
</Routes>
    </div>
  );
}

export default App;
