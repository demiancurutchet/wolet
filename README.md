# Wolet

App personal de finanzas: próximo resumen de tarjeta, cuotas, gastos fijos y delivery.

- Front: un solo `index.html` estático (Vercel).
- Login y datos: Firebase Auth (Google) + Firestore, documento `users/{uid}`.
- Acceso: `firestore.rules` solo deja leer/escribir a la cuenta del dueño.
- Config pública de Firebase en `config.js` (no es secreta).
