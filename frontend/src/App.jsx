import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import { AuthContext, AuthProvider } from './contexts/AuthContext.jsx'

//General pages
import LandingPage from './pages/Landing.jsx'
import NotFoundPage from './pages/NotFound.jsx'

//Auth pages
import RegisterPage from './pages/authentication/Register.jsx'
import LoginPage from './pages/authentication/Login.jsx'
import AdminLoginPage from './pages/authentication/AdminLogin.jsx'
import ForgotPasswordPage from './pages/authentication/ForgotPassword.jsx'
import ResetPasswordPage from './pages/authentication/ResetPassword.jsx'

//User pages
import UserProfilePage from './pages/users/UserProfile.jsx'
import ChangePasswordPage from './pages/users/ChangePassword.jsx'
import UserSugestionsPage from './pages/users/UserSugestions.jsx'
import Dashboard from './pages/users/Dashboard.jsx'

//Game pages
import GamesDashboard from './pages/games/GamesDashboard.jsx'
import Statistics from './components/Gamemoria/Statistic';
import MemoryGame from './pages/games/MemoryGame';
import TowerGame from './pages/games/tower.jsx'
import Meditation from './pages/games/Meditation.jsx'

//Admin pages
import AdminDashboard from './pages/admin/AdminDashboard.jsx'

function App() {

  //const { token, isLoading } = useContext(AuthContext)

  //if (isLoading) return <div>Loading...</div>

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          //Esto en teoría debería tener un /:id al final para que el sitio sea único, además de temporal
          //Pero vamos a pelear con eso más adelante
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          //Ruta protegida, solo debería poderse acceder si hay un usuario logueado

          <Route element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path='/change-password' element={<ChangePasswordPage />} />
            <Route path='/sugestions' element={<UserSugestionsPage />} />
            <Route path='/games' element={<GamesDashboard />} />
            <Route path="/game-memory" element={<MemoryGame />} />  {/*ruta de juego de memoria*/}
            <Route path="/game-tower" element={<TowerGame />} />
            <Route path="/stats" element={<Statistics />} />  {/*ruta de estadisticas*/}
            <Route path="/meditation" element={<Meditation />} />
          </Route>

          {/*<Route element={<ProtectedRoute canActive={token} role={userRole} requieredRole="admin" redirectPath="login" />}> */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/*</Route>*/}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
