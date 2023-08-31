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
import UserTest from './component/template/user';
import User from './component/page/user';
import Result from './component/template/result';
import Test from './component/template/test';
import Role from './component/page/role';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /**<React.StrictMode>
    <App />
  </React.StrictMode>**/
  <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/user" element={<User/>}/>
        <Route path="/admin/question" element={<Question/>}/>
        <Route path="/admin/test" element={<Test/>}/>
        <Route path="/admin/role" element={<Role/>}/>
        <Route path="/user" element={<UserTest/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();