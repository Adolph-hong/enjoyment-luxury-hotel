import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
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
