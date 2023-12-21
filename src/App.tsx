import { Route } from 'react-router-dom'
import './App.css'
import { Home, Login } from './pages'
import { AuthGuard, RoutesWithNotFound } from './utilities'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './models'

const App = () => {
  return (
    <RoutesWithNotFound>
      <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
      <Route path="/" element={<AuthGuard />} >
        <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
      </Route>
    </RoutesWithNotFound>
  )
}
export default App
