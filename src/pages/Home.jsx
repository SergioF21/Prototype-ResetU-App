export default function Home({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-100 to-white p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Reset U</h1>
      <p className="text-gray-700 mb-8">
        Tu espacio digital para mejorar el bienestar universitario.  
        Gestiona tu tiempo, descansa mejor y reduce el estrés académico.
      </p>
      <button
        onClick={onStart}
        className="bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:bg-green-600 transition"
      >
        Comenzar
      </button>
    </div>
  )
}
