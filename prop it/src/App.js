import './App.css';
import Personcard from './components/personcard';


function App() {
  return (
    <div className="App">
    <Personcard fullname ={"Doe,Jane"} age={45} haircolor ={"Black"}  /> 
    <Personcard fullname ={"Smith,John"} age={88} haircolor ={"Brown"}  /> 
    <Personcard fullname ={"Fillmore,Millard"} age={50} haircolor ={"Brown"}  /> 
    <Personcard fullname ={"Smith,Maria"} age={62} haircolor ={"Brown"}  /> 

    </div>
  );
}

export default App;
