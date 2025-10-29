# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Reset U 💚  
**Aplicación web progresiva (PWA)** para la gestión del bienestar universitario.

## 🚀 Descripción
Reset U busca reducir el estrés académico y mejorar los hábitos de descanso y organización de los estudiantes universitarios de Lima Metropolitana.  
Esta primera versión es un MVP accesible por web con diseño móvil y enfoque en la personalización de la experiencia del usuario.

## 🧩 Tecnologías
- React + Vite  
- TailwindCSS  
- Context API  
- LocalStorage para persistencia temporal  
- (Opcional) Firebase para autenticación y datos  

## 📂 Estructura
- `/components`: Elementos de UI reutilizables  
- `/pages`: Vistas principales de la app  
- `/services`: Lógica de datos (mock o API real)  

## ▶ Instalación
```bash
git clone https://github.com/<tu-usuario>/reset-u.git
cd reset-u
npm install
npm run dev
