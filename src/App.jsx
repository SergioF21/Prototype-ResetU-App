import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(null)

  if (page === 'home') return <Home onStart={() => setPage('login')} />
  if (page === 'login') return <Login onLogin={(u) => { setUser(u); setPage('dashboard'); }} />
  if (page === 'dashboard') return <Dashboard user={user} onLogout={() => setPage('home')} />
}
