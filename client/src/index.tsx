import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Navbar from 'components/Navbar';
import { Container } from 'components';
import {  AddApartment, NotFound } from 'pages';
import { store } from 'context/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Layout = () => <Provider store={store}>
  <Navbar />
  <Container className='pt-5 pb-12'>
    <Outlet />
  </Container>
</Provider>

root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<App />} />
              <Route path='add-apartment' element={<AddApartment />} />
              <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </Router>
  </React.StrictMode>
);

