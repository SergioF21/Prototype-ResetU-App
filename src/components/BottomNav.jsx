export default function BottomNav({ onLogout }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 shadow-inner">
      <button className="text-green-600 font-semibold">🏠</button>
      <button className="text-green-600 font-semibold">📅</button>
      <button
        onClick={onLogout}
        className="text-red-500 font-semibold"
      >
        🚪 Salir
      </button>
    </nav>
  )
}
