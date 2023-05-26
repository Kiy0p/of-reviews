import React, { Fragment, useState } from 'react';
import { AuthProvider } from 'react-auth-kit';

import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Connection from './components/Connection';
import Login from './components/Login';

import { BrowserRouter as Rooter, Route, Routes } from 'react-router-dom'


function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (<Login setToken={ setToken } />)
  }

  return (
    <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
      <React.StrictMode>
        <Rooter>
          <Routes>
            <Route exact path ='/' element={ <Connection/> }/>
            <Route exact path ='/home' element={ <Home/> } />
            <Route exact path ='/profile' element={ <Profile/> } />
            <Route path= '*' element={ <NotFound/> } />
          </Routes>
        </Rooter>
      </React.StrictMode>
    </AuthProvider>
  );

}

export default App;
