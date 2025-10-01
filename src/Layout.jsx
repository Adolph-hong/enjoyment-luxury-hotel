import { useMatches, Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
const Layout = () => {
  const matches = useMatches()
  const current = matches.at(-1)
  const variant = current?.handle?.headerVariant
  const showFooter = current?.handle?.footer !== false
  return (
    <div>
      <Header simple={variant === 'simple'} />
      <main>
        <Outlet /> {/* 這裡會渲染子路由 */}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout
