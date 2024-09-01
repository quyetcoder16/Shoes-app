import React from 'react';
import ReactDOM from 'react-dom/client';

// setup scss

import './assets/scss/style.scss'

// setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
// setup react-router-dom

import {
  BrowserRouter,
  Navigate, Route, Routes,
} from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import Carts from './pages/Carts/Carts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter >
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='carts' element={<Carts />}></Route>
          <Route path='detail' >
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='*' element={<Navigate to={'/'} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

