import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import AppRoutes from './AppRoutes'
import '../styles/globals.css'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-root">
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
