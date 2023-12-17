import "./App.css";
import Main from "./conponents/Main";
import OneProduct from "./conponents/OneProduct";
import UpdateProduct from "./conponents/UpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product/:id" element={<OneProduct />}  />
                    <Route path="/product/edit/:id" element={<UpdateProduct />} />
                </Routes>
            </div>
    );
}

export default App;