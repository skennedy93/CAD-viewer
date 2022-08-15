import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import Home from './home';
import Amrok from './partners/amrok';
import Fifthaxis from './partners/fifthaxis';
import Miteebite from './partners/miteebite';
import Schunk from './partners/schunk';
import Triag from './partners/triag';
import Trinity from './partners/trinity';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/triag' element={<Triag/>}/>
    <Route path='/amrok' element={<Amrok/>}/>
    <Route path='/fifthaxis' element={<Fifthaxis/>}/>
    <Route path='/trinity' element={<Trinity/>}/>
    <Route path='/miteebite' element={<Miteebite/>}/>
    <Route path='/schunk' element={<Schunk/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}