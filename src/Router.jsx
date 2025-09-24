import { createBrowserRouter } from 'react-router-dom'
import NavbarMain from './components/Navbar/NavbarMain'
import NavbarAuth from './components/Navbar/NavbarAuth'
import Home from './components/pages/Home'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/navbarmain', element: <NavbarMain /> },
  { path: '/navbarauth', element: <NavbarAuth /> },
])
