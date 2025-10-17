import { useMatches, Outlet, UIMatch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

type RouteHandle = {
  headerVariant?: 'simple' | 'default'
  footer?: boolean
}
// 在 React Router v6.4+，useMatches() 的回傳值型別是 UIMatch[]
const Layout: React.FC = () => {
  const matches = useMatches() as UIMatch<unknown, RouteHandle>[]
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
