import { Navigate, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Home, Login } from './pages'
import { AuthGuard, RoutesWithNotFound, removeUserLocalstorage, saveUserLocalstorage } from './utilities'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './models'
import { useEffect } from 'react'
import { supabase } from './services'
import { useSupaSession } from './hooks'

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      switch (_event) {
        case 'SIGNED_IN':
          const userId = session?.user.id;
          console.log("singed in");
          saveUserLocalstorage(userId)
          navigate(PRIVATE_ROUTES.HOME);
          break;
        case 'SIGNED_OUT':
          console.log("singed out");
          removeUserLocalstorage();
          navigate(PUBLIC_ROUTES.LOGIN);
          break;
        default:
          null
          break;
      }
    })

    return () => subscription.unsubscribe();
  }, [])
  
  return (
    <RoutesWithNotFound>
      <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
      <Route path='/' element={<Navigate to={PRIVATE_ROUTES.HOME} />} />
      <Route element={<AuthGuard />} >
        <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
      </Route>
    </RoutesWithNotFound>
  )
}
export default App
