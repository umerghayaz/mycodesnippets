import React, { useEffect, useState } from 'react';
import CrudRead from './components/Crudread';
import Create from './components/Create';
import { Routes, Route,Navigate } from 'react-router-dom'
import Header1 from './components/Header';
import Cardcomp from './components/Cardcomp';
import Layoutmain from './components/Layoutmain';
import { AgentLoginReport } from './Assets/AgentLoginReport ';
import ResponsiveForm from './components/ResponsiveForm';
import Chartcomp from './components/Chartcomp';
import HeaderComponent from './components/HeaderComponent';

const App = () => {
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <HeaderComponent/> } />

      <Route path="/s" element={ <Layoutmain/> } />

      <Route path="/ss" element={ <AgentLoginReport/> } />

        <Route path="/read" element={ <CrudRead/> } />
        <Route path="/read/Create" element={ <Create/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
// {/* <CrudRead/> */}
)};
export default App;