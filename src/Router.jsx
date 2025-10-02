import { createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Layout from './Layout.jsx'
import Login from './components/auth/Login.jsx'
import SignUp from './components/auth/SignUp.jsx'
import Account from './components/pages/Account.jsx'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'login',
          element: <Login />,
          handle: { headerVariant: 'simple' },
          handle: { footer: false },
        },
        {
          path: 'sign-up',
          element: <SignUp />,
          handle: { headerVariant: 'simple' },
          handle: { footer: false },
        },
        {
          path: 'account',
          element: <Account />,
        },
      ],
    },
  ],
  {
    basename: '/enjoyment-luxury-hotel/', // ← 設定前綴
  },
)
