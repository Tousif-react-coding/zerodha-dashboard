
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import AuthComponent from './components/AuthComponent';


function App() {
  return (
  
    <BrowserRouter>
     
      <Routes>
       
         
          <Route path="/*" element={<AuthComponent />} />
     
       
      </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
