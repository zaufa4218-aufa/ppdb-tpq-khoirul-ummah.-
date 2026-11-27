import { createContext, useContext, useState, useEffect } from 'react'
import { DEMO_ACCOUNTS } from '../data/mockData'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = sessionStorage.getItem('tpq_demo_user')
      if (saved) return JSON.parse(saved)
    } catch {
      // fallback
    }

    // Auto-detect dari URL pada prototipe demo agar link dapat langsung dibuka
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      if (path.startsWith('/admin')) {
        const { password: _, ...adminData } = DEMO_ACCOUNTS.admin
        return adminData
      }
      if (path.startsWith('/portal')) {
        const { password: _, ...parentData } = DEMO_ACCOUNTS.parent
        return parentData
      }
    }

    return null
  })
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    if (user) {
      try {
        sessionStorage.setItem('tpq_demo_user', JSON.stringify(user))
      } catch {
        // ignore
      }
    } else {
      try {
        sessionStorage.removeItem('tpq_demo_user')
      } catch {
        // ignore
      }
    }
  }, [user])

  function login(email, password, customName) {
    setLoginError('')

    // 1. Cek akun demo bawaan jika cocok
    const knownAccount = Object.values(DEMO_ACCOUNTS).find(
      acc => acc.email.toLowerCase() === email.toLowerCase() && acc.password === password
    )
    if (knownAccount) {
      const { password: _, ...userData } = knownAccount
      setUser(userData)
      return { ok: true, role: userData.role }
    }

    // 2. Izinkan semua akun (email & password apapun dapat masuk)
    if (email && password) {
      const rawName = customName || email.split('@')[0]
      const formattedName = customName
        ? customName
        : rawName
            .split(/[._-]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || 'Pengguna'

      // Jika email mengandung kata "admin", jadikan admin; selain itu jadikan orang tua (parent)
      const isAdmin = email.toLowerCase().includes('admin')
      const role = isAdmin ? 'admin' : 'parent'

      const userData = {
        name: isAdmin ? `Admin (${formattedName})` : formattedName,
        email: email,
        role: role,
      }

      setUser(userData)
      return { ok: true, role: userData.role }
    } else {
      setLoginError('Email dan kata sandi wajib diisi.')
      return { ok: false }
    }
  }

  function loginAs(role) {
    const account = DEMO_ACCOUNTS[role] || DEMO_ACCOUNTS.parent
    const { password: _, ...userData } = account
    setUser(userData)
    return userData
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, loginAs, logout, loginError, setLoginError }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
