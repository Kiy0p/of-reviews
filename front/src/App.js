import React from 'react';

import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Login from './components/Login';

import "./styles/App.css";

import { BrowserRouter as Rooter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <React.StrictMode>
      <Rooter>
        <Routes>
          <Route exact path ='/' element={ <Login/> }/>
          <Route exact path ='/register' element={ <Register/> }/>
          <Route exact path ='/home' element={ <Home/> } />
          <Route exact path ='/profile' element={ <Profile/> } />
          <Route path= '*' element={ <NotFound/> } />
        </Routes>
      </Rooter>
    </React.StrictMode>
  );

}

export default App;
