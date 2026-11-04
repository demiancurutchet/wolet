// Configuración pública de Firebase (no es secreta: la seguridad está en firestore.rules).
// authDomain usa el mismo dominio de la app, así el login funciona también
// cuando la app está agregada a la pantalla de inicio del iPhone (vercel.json reenvía /__/auth).
const host = location.hostname;
const sameOrigin = host.endsWith('.vercel.app') || host === 'wolet.app';
export const firebaseConfig = {
  apiKey: "AIzaSyBzHKCF6nzj4A415Clwvsf5QY41DuT4UCo",
  authDomain: sameOrigin ? host : "wolet-286e2.firebaseapp.com",
  projectId: "wolet-286e2",
  storageBucket: "wolet-286e2.firebasestorage.app",
  messagingSenderId: "562641083793",
  appId: "1:562641083793:web:c9760cc7b08d2120208e30"
};
