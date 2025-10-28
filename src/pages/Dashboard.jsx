import BottomNav from '../components/BottomNav'

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-green-500 text-white p-4 text-center font-semibold">
        Bienvenido, {user?.name || 'usuario'}
      </header>

      <main className="flex-1 p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Tu resumen semanal 🌿</h2>
        <div className="bg-green-50 p-4 rounded-2xl shadow-sm">
          <p className="text-gray-700">Horas de descanso promedio: <b>7.2 h</b></p>
          <p className="text-gray-700">Nivel de estrés: <b>Moderado</b></p>
          <p className="text-gray-700">Recomendación: <i>Programa pausas activas y revisa tu tiempo de sueño</i>.</p>
        </div>
      </main>

      <BottomNav onLogout={onLogout} />
    </div>
  )
}
