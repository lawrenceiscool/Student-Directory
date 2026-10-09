import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import StaticApp from './StaticApp.jsx';
import './index.css';

const isStaticLab = new URLSearchParams(window.location.search).get('lab') === '1';

createRoot(document.getElementById('root')).render(
  <StrictMode>{isStaticLab ? <StaticApp /> : <App />}</StrictMode>,
);
