import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';


function AppRoutes(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="app" element={<p>Hey</p>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
