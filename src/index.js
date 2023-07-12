import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import ErrorPath from './components/ErrorPath';
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Login from './components/Login';
import Register from './components/Register';
import Message from './components/Message';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={ <App/> }>
        <Route index element = { <Home/> } />
        <Route path='cart' element = { <Cart/> } />
        <Route path='about' element = { <About/> } />
        <Route path='account' element = { <Account/> } >
          <Route index  element={ <Login/> }/>
          <Route path='register'  element={ <Register/> }/>
        </Route>        
        <Route path='contact' element = { <Contact/> } />
        <Route path='confirmation' element = { <Message/> } />
        <Route path='*' element = { <ErrorPath/> } />
      </Route>

      <Route path='/webstore' element={ <App/> }>
        <Route index element = { <Home/> } />
        <Route path='cart' element = { <Cart/> } />
        <Route path='about' element = { <About/> } />
        <Route path='account' element = { <Account/> } >
          <Route index  element={ <Login/> }/>
          <Route path='register'  element={ <Register/> }/>
        </Route>              
        <Route path='contact' element = { <Contact/> } />
        <Route path='confirmation' element = { <Message/> } />
        <Route path='*' element = { <ErrorPath/> } />
      </Route>
    </>
  )
);
root.render(
  <React.StrictMode>

    <RouterProvider router={ router }/>

  </React.StrictMode>
);

