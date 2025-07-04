import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from '../api'
import { BarChart3, Mail, Lock, User, ArrowRight } from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    
    setLoading(true)
    
    try {
      const response = await authAPI.register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
      
      console.log('Registro exitoso:', response)
      alert('¡Cuenta creada! Ahora puedes iniciar sesión')
      
      // Redirigir al login
      window.location.href = '/login'
      
    } catch (error: any) {
      console.error('Error registro:', error)
      alert(error.response?.data?.message || 'Error al crear cuenta')
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
          <h2 className="text-3xl font-bold text-gray-900">Crear Cuenta</h2>
          <p className="mt-2 text-gray-600">
            Empieza gratis - 14 días de prueba
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Nombre completo
              </label>
              <div className="relative">
                <User className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tu nombre"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Confirmar contraseña
              </label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
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
                'Creando cuenta...'
              ) : (
                <>
                  Crear Cuenta Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Inicia sesión
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

export default Register;
