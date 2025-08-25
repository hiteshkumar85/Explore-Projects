import FooterPage from './components/pages/FooterPage'
import Nav from './components/pages/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <FooterPage/>
    </> 
)
}
export default App