import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route, Link , NavLink} from "react-router-dom";
import HomePage from './pages/Homepage'
import PoliticaSeguranca from './pages/PoliticaSeguranca'
import DenuncieAqui from './pages/DenuncieAqui';



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes  >
    <Route path='/' Component={HomePage}></Route>
    <Route path='/PoliticasSeguranca' Component={PoliticaSeguranca}></Route>
    <Route path='/DenuncieAqui' Component={DenuncieAqui}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
