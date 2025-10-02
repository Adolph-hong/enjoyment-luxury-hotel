import { createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Layout from './Layout.jsx'
import Login from './components/auth/Login.jsx'
import SignUp from './components/auth/SignUp.jsx'
import SignUp2 from './components/auth/SignUp-2.jsx'

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
          handle: { headerVariant: 'simple', footer: false },
        },
        {
          path: 'sign-up',
          element: <SignUp />,
          handle: { headerVariant: 'simple', footer: false },
        },
        {
          path: 'sign-up2',
          element: <SignUp2 />,
          handle: { headerVariant: 'simple', footer: false },
        },
      ],
    },
  ],
  {
    basename: '/enjoyment-luxury-hotel/', // ← 設定前綴
  },
)
