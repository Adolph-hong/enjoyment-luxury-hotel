import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* 這裡會渲染子路由 */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
