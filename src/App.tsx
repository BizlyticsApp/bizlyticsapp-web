import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Zap,
  Shield,
  Users,
  ArrowRight,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                BizlyticsApp
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 font-medium">
                Iniciar Sesión
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Prueba Gratis
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Conecta todas tus herramientas.
            <br />
            <span className="text-blue-600">
              Insights automáticos en 5 minutos.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dashboard que conecta Stripe, Google Analytics y Gmail para generar
            insights inteligentes y alertas automáticas para tu pequeña empresa.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg flex items-center">
              Empezar Gratis - 14 días
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 font-semibold text-lg">
              Ver Demo
            </button>
          </div>

          {/* Demo preview */}
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">
                  Vista previa del Dashboard
                </p>
                <p className="text-sm text-gray-500">
                  Métricas en tiempo real + Insights de IA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para entender tu negocio
            </h2>
            <p className="text-xl text-gray-600">
              En 5 minutos conectas todo. En 5 días ya sabes exactamente qué
              mejorar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Conexión Instantánea
              </h3>
              <p className="text-gray-600">
                Conecta Stripe, Google Analytics y Gmail en menos de 5 minutos.
                Sin configuraciones complejas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Insights Inteligentes
              </h3>
              <p className="text-gray-600">
                IA analiza tus datos y te dice exactamente qué está funcionando
                y qué necesitas mejorar.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Alertas Automáticas
              </h3>
              <p className="text-gray-600">
                Recibe notificaciones inteligentes cuando algo importante sucede
                en tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Precios simples y transparentes
            </h2>
            <p className="text-xl text-gray-600">
              Comienza gratis, escala cuando necesites más.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-xl shadow-lg p-8 border">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-4">
                €0<span className="text-lg text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>2 conexiones
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Análisis básico
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dashboard simple
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:border-gray-400 font-medium">
                Empezar Gratis
              </button>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-500 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">
                €9,95<span className="text-lg text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Conexiones ilimitadas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Insights con IA
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Alertas automáticas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  14 días gratis
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
                Probar 14 Días Gratis
              </button>
            </div>

            {/* Business */}
            <div className="bg-white rounded-xl shadow-lg p-8 border">
              <h3 className="text-xl font-semibold mb-2">Business</h3>
              <div className="text-3xl font-bold mb-4">
                €19,95<span className="text-lg text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Múltiples negocios
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  API acceso
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Soporte dedicado
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Todo de Pro
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:border-gray-400 font-medium">
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para entender tu negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a cientos de empresas que ya usan BizlyticsApp para tomar
            mejores decisiones.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-lg">
            Empezar Gratis - 14 días
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">BizlyticsApp</span>
            </div>
            <div className="text-gray-400">
              © 2025 BizlyticsApp. Hecho con ❤️ en Asturias.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
