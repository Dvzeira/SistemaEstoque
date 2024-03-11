import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from  'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import CreateProduct from './pages/CreatProduct.jsx'
import Produto from './pages/Produto.jsx'
import Editar from './pages/Editar.jsx'
import Sobre from './pages/Sobre.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "criar",
    element: <CreateProduct/>
  },
  {
    path: "produto/:id",
    element: <Produto/>
  },
  {
    path: "editar/:id",
    element: <Editar/>
  },
  {
    path: "sobre",
    element: <Sobre/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router = {router}></RouterProvider>
    </ThemeProvider>
    
  </React.StrictMode>,
)
