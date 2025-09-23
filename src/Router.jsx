import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/index.jsx'
import Login from './components/Login/index.jsx'
import Signup from './components/Signup/index.jsx'
import Layout from './Layout.jsx'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
      ],
    },
  ],
  {
    basename: '/enjoyment-luxury-hotel/', // ← 設定前綴
  },
)
