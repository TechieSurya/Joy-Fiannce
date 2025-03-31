import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import AppLayout from './layout/AppLayout';
import Form from './pages/Form';
function App() {
  

  return (
    <Router>

      <Routes>
       <Route element={<AppLayout/>}>
        <Route index path='/' element={<Home/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/form' element={<Form/>}/>
        </Route>
      </Routes>

    </Router>
  )
}

export default App
