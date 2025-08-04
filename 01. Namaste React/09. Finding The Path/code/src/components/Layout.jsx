
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
   <Header />
   <Outlet/>
   <Footer/>
    </>
  )
}

export default Layout