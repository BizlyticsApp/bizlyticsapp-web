import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from '../api' 
import { BarChart3, Mail, Lock, ArrowRight } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await authAPI.login({ email, password })
      console.log('Login exitoso:', response)
      
      // Guardar token si existe
      if (response.token) {
        localStorage.setItem('token', response.token)
      }
      
      // Redirigir al dashboard
      window.location.href = '/dashboard'
      
    } catch (error: any) {
      console.error('Error login:', error)
      alert(error.response?.data?.message || 'Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center mb-4">
            <BarChart3 className="h-10 w-10 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              BizlyticsApp
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Iniciar Sesión</h2>
          <p className="mt-2 text-gray-600">
            Accede a tu dashboard de insights
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 font-medium flex items-center justify-center disabled:opacity-50"
            >
              {loading ? (
                'Iniciando sesión...'
              ) : (
                <>
                  Iniciar Sesión
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿No tienes cuenta?{' '}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Regístrate gratis
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
