import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import App from './App.jsx';
import './index.css';
// import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ProSidebarProvider> {/* Sidebar provider can be outside the BrowserRouter */}
        <App />
    </ProSidebarProvider>
  </StrictMode>
);
