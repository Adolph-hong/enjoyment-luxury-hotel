import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
])
