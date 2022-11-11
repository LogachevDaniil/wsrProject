import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './HOC/Layout';
import Register from './pages/Register';
import HelloPage from './pages/HelloPage';
import Authtorization from './pages/Authtorization';
import { ProviderContextWrapper } from './Context/ProviderContext';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderContextWrapper>
      <Router>
        <Layout>
          <Routes>
            <Route path='/HelloPage' element={<HelloPage />} />
          </Routes>
          <Routes>
            <Route path='/Register' element={<Register />} />
          </Routes>
          <Routes>
            <Route path='/Authtorization' element={<Authtorization />} />
          </Routes>
        </Layout>
      </Router>
    </ProviderContextWrapper>
  </React.StrictMode>
);
