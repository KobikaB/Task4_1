import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Aqua from './Pages/Aqua';
import Livestock from './Pages/Livestock';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus';
import Poultry from './Pages/Poultry';
import Agri from './Pages/Agri';

const App = () => {
  const location = useLocation(); // Get current location/path
  const noHeaderRoutes = ['/login', '/register']; // Routes without header

  return (
    <div>
     
      {!noHeaderRoutes.includes(location.pathname) && (
        <div className='bg-gray-300'>
          <Header />
        </div>
      )}

    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agri' element={<Agri />} />
        <Route path='/aqua' element={<Aqua />} />
        <Route path='/livestock' element={<Livestock />} />
        <Route path='/poultry' element={<Poultry />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};


const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
