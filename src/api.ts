import axios from 'axios';

const API_BASE_URL = 'https://bizlyticsapp-backend.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authAPI = {
  register: async (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    // Simulación temporal mientras configuramos CORS
    console.log('Registro (simulado):', userData);

    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simular respuesta exitosa
    return {
      success: true,
      message: 'Usuario registrado exitosamente',
      user: {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
      },
    };
  },

  login: async (credentials: { email: string; password: string }) => {
    console.log('Login (simulado):', credentials);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
      success: true,
      message: 'Login exitoso',
      token: 'fake-jwt-token-' + Date.now(),
      user: {
        id: 1,
        name: 'Usuario Test',
        email: credentials.email,
      },
    };
  },
};

export default api;
