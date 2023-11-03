import Navbars from './navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbars />
      <div className='container'>{children}</div>
    </div>
  )
}

export default Layout
