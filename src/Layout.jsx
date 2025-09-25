import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/headerr'
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
