import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import NotFound from './component/page/error/404';
import Home from './component/page/home';
import Admin from './component/page/admin';
import Question from './component/page/question';
<<<<<<< Updated upstream
=======
import User from './component/page/user';
import Test from './component/page/test';
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /**<React.StrictMode>
    <App />
  </React.StrictMode>**/
  <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/question" element={<Question/>}/>
<<<<<<< Updated upstream
=======
        <Route path="/admin/user" element={<User/>}/>
        <Route path="/user" element={<Test/>}/>
>>>>>>> Stashed changes
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
