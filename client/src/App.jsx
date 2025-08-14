import Nav from './components/pages/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
