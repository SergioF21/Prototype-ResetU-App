import { useState } from 'react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onLogin({ name: 'Usuario', email })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Inicia sesión</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <input
          type="email"
          placeholder="Correo institucional"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
