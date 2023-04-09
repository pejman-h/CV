import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Altre_Competenze from "./components/Altre_Competenze/Altre_Competenze";

import './App.css';
import './Navbar.css';
import Esperienze from './components/Esperienze/Esperienze';
import Istruzione from "./components/Istruzione/Istruzione";
import Navbar from './components/Navbar';
import Profilo from './components/Profilo';
import Hobby from "./components/Hobby/Hobby";

import Skills from "./components/Skills";


function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Profilo />} />
          <Route path="Esperienze" element={<Esperienze />} />
          <Route path="Istruzione" element={<Istruzione />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Hobby" element={<Hobby />} />
          <Route path="altrecompetenze" element={<Altre_Competenze />} />
         
        </Route>
      </Routes>

    </>
    </BrowserRouter>
  
  );
}

export default App;
