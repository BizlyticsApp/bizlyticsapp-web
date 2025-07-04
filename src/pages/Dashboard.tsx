import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  AlertCircle,
  Settings,
  LogOut,
  Bell,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

function Dashboard() {
  const [user, setUser] = useState({
    name: 'Usuario Test',
    email: 'test@email.com',
  });

  // Datos simulados para gráficos
  const revenueData = [
    { month: 'Ene', revenue: 1200, users: 24 },
    { month: 'Feb', revenue: 1800, users: 36 },
    { month: 'Mar', revenue: 2400, users: 48 },
    { month: 'Abr', revenue: 2100, users: 42 },
    { month: 'May', revenue: 2800, users: 56 },
    { month: 'Jun', revenue: 3200, users: 64 },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                BizlyticsApp
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Hola, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-500 hover:text-gray-700"
                  title="Cerrar sesión"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Resumen de tu negocio - Últimos 30 días
          </p>
        </div>

        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Ingresos Totales</p>
                <p className="text-2xl font-bold text-gray-900">€3,245</p>
                <p className="text-sm text-green-600">+12.5% vs mes anterior</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Usuarios Activos</p>
                <p className="text-2xl font-bold text-gray-900">64</p>
                <p className="text-sm text-blue-600">+8.2% vs mes anterior</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Conversión</p>
                <p className="text-2xl font-bold text-gray-900">3.4%</p>
                <p className="text-sm text-purple-600">+0.8% vs mes anterior</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Alertas</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
                <p className="text-sm text-orange-600">Necesitan atención</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ingresos por Mes
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`€${value}`, 'Ingresos']} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Users Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Usuarios por Mes
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}`, 'Usuarios']} />
                <Bar dataKey="users" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights de IA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Insights */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Insights de IA
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border-l-4 border-green-400">
                <p className="text-sm text-green-700">
                  <strong>✅ Crecimiento positivo:</strong> Tus ingresos han
                  crecido un 12.5% este mes. El plan Pro está funcionando muy
                  bien.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-400">
                <p className="text-sm text-blue-700">
                  <strong>💡 Oportunidad:</strong> Los usuarios que conectan
                  Gmail tienen 40% más conversión. Promociona esta integración.
                </p>
              </div>
              <div className="p-4 bg-orange-50 border-l-4 border-orange-400">
                <p className="text-sm text-orange-700">
                  <strong>⚠️ Atención:</strong> 3 usuarios cancelaron esta
                  semana. Revisa el onboarding del primer mes.
                </p>
              </div>
            </div>
          </div>

          {/* Integraciones */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Estado Integraciones
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium">Stripe</span>
                </div>
                <span className="text-sm text-green-600">Conectado</span>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium">Google Analytics</span>
                </div>
                <span className="text-sm text-green-600">Conectado</span>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <span className="font-medium">Gmail</span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-500">
                  Conectar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
