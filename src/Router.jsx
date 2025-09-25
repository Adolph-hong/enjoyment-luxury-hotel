import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/index.jsx'
import Layout from './Layout.jsx'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ],
  {
    basename: '/enjoyment-luxury-hotel/', // ← 設定前綴
  },
)
