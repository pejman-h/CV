import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Altre_Competenze from "./Altre_Competenze/Altre_Competenze";

import './App.css';
import Esperienze from './components/Esperienze/Esperienze';
import Istruzione from "./components/Istruzione/Istruzione";
/* import Layout from "./components/Layout/Layout"; */
import Navbar from './components/Navbar/Navbar';
import Profilo from './components/Profilo';
import Hobby from "./Hobby/Hobby";
import Skills from "./Skills";


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
         {/*  <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>

    </>
    </BrowserRouter>
  );
}

export default App;
