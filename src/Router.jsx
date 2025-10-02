import { createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Layout from './Layout.jsx'
import Login from './components/auth/Login.jsx'
import SignUp from './components/auth/SignUp.jsx'
import Account from './components/pages/Account.jsx'
import Rooms from './components/pages/Rooms.jsx'
import RoomDetail from './components/pages/RoomDetail.jsx'
import Booking from './components/pages/Booking.jsx'

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
          path: 'account',
          element: <Account />,
        },
        {
          path: 'room',
          element: <Rooms />,
        },
        {
          path: 'room/:roomId',
          element: <RoomDetail />,
        },
        {
          path: 'booking',
          element: <Booking />,
        },
      ],
    },
  ],
  {
    basename: '/enjoyment-luxury-hotel/', // ← 設定前綴
  },
)
