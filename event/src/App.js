import React from 'react';
import './App.css';
import Personcard from './components/personcard';


function App() {
  return (
    <div className="App">
    <Personcard fullname ={"Doe,Jane"} Age={45} haircolor ={"Black"}  /> 
    <Personcard fullname ={"Smith,John"} Age={88} haircolor ={"Brown"}  /> 
    <Personcard fullname ={"Fillmore,Millard"} Age={50} haircolor ={"Brown"}  /> 
    <Personcard fullname ={"Smith,Maria"} Age={62} haircolor ={"Brown"}  /> 

    </div>
  );
}

export default App;
