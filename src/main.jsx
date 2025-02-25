import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import BoardMembers from './pages/BoardMembers';
import Header from './components/header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/board-members" element={<BoardMembers />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
