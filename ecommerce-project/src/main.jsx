import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import MainLayout from './layout/MainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MainLayout></MainLayout>
</BrowserRouter>
)
