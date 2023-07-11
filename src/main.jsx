import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import { Layout } from './components/Layout';
import { action as nuevoClienteAction, NuevoCliente } from './pages/nuevo-cliente';
import { Index, loader as clientesLoader } from './pages';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
    {
      index: true,
      element: <Index/>,
      loader : clientesLoader,
    
    },
    {
      path: '/clientes/nuevo',
      element: <NuevoCliente/>,
      action : nuevoClienteAction
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
