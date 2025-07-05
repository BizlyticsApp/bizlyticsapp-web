import React, { useState } from 'react';

// Estilos CSS básicos modernos
const styles = {
  // Reset y base
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    backgroundColor: '#ffffff'
  },
  
  // Header moderno
  header: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '1rem 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#ffffff',
    cursor: 'pointer'
  },
  
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  
  navLink: {
    color: '#e2e8f0',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer'
  },
  
  // Hero section espectacular
  hero: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    color: 'white',
    padding: '120px 0 80px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2
  },
  
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: 1.2
  },
  
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: '#cbd5e1',
    maxWidth: '600px',
    margin: '0 auto 2rem'
  },
  
  ctaButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
  },
  
  // Features section
  features: {
    padding: '80px 0',
    backgroundColor: '#f8fafc'
  },
  
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1e293b'
  },
  
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  
  featureCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0'
  },
  
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'block'
  },
  
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1e293b'
  },
  
  featureDescription: {
    color: '#64748b',
    fontSize: '1rem',
    lineHeight: 1.6
  },
  
  // Pricing section
  pricing: {
    padding: '80px 0',
    backgroundColor: 'white'
  },
  
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  
  pricingCard: {
    background: 'white',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '2px solid #e2e8f0',
    textAlign: 'center'
  },
  
  pricingCardPro: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    border: '2px solid #3b82f6',
    transform: 'scale(1.05)',
    boxShadow: '0 8px 40px rgba(59, 130, 246, 0.3)'
  },
  
  pricingPlan: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  
  pricingPrice: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  
  pricingPeriod: {
    fontSize: '1rem',
    opacity: 0.8,
    marginBottom: '2rem'
  },
  
  pricingFeatures: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 2rem 0'
  },
  
  pricingFeature: {
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(0,0,0,0.1)'
  },
  
  pricingButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    width: '100%'
  },
  
  pricingButtonWhite: {
    background: 'white',
    color: '#3b82f6',
    border: '2px solid white'
  },
  
  // Footer
  footer: {
    background: '#1e293b',
    color: 'white',
    padding: '3rem 0',
    textAlign: 'center'
  },
  
  // Auth pages
  authContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '2rem'
  },
  
  authCard: {
    background: 'white',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
    width: '100%',
    maxWidth: '400px'
  },
  
  authTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#1e293b'
  },
  
  formGroup: {
    marginBottom: '1.5rem'
  },
  
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#374151'
  },
  
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1rem',
    boxSizing: 'border-box'
  },
  
  submitButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    padding: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    width: '100%'
  },
  
  // Dashboard
  dashboard: {
    padding: '2rem',
    backgroundColor: '#f8fafc',
    minHeight: '100vh'
  },
  
  dashboardHeader: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    marginBottom: '2rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  
  dashboardTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '1rem'
  },
  
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  
  metricCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  
  metricValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1e293b'
  },
  
  metricLabel: {
    color: '#64748b',
    fontSize: '0.9rem',
    marginTop: '0.5rem'
  }
};

// Componente Landing Page
const LandingPage = ({ onNavigate }) => {
  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo} onClick={() => onNavigate('home')}>
            BizlyticsApp
          </div>
          <ul style={styles.navLinks}>
            <li><a href="#features" style={styles.navLink}>Características</a></li>
            <li><a href="#pricing" style={styles.navLink}>Precios</a></li>
            <li><span style={styles.navLink} onClick={() => onNavigate('login')}>Iniciar Sesión</span></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Conecta todas tus herramientas.<br/>
            Insights automáticos en 5 minutos.
          </h1>
          <p style={styles.heroSubtitle}>
            Dashboard inteligente que conecta Stripe, Google Analytics y Gmail. 
            Recibe alertas automáticas y descubre exactamente qué mejorar en tu negocio.
          </p>
          <button 
            style={styles.ctaButton}
            onClick={() => onNavigate('register')}
          >
            Comenzar Gratis
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Todo lo que necesitas en un solo lugar</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <span style={{...styles.featureIcon, color: '#3b82f6'}}>⚡</span>
              <h3 style={styles.featureTitle}>Conexión Instantánea</h3>
              <p style={styles.featureDescription}>
                Conecta Stripe, Google Analytics y Gmail en menos de 5 minutos. 
                Sin configuraciones complicadas, solo resultados inmediatos.
              </p>
            </div>
            
            <div style={styles.featureCard}>
              <span style={{...styles.featureIcon, color: '#10b981'}}>🤖</span>
              <h3 style={styles.featureTitle}>Insights Inteligentes</h3>
              <p style={styles.featureDescription}>
                IA que analiza tus datos y te dice exactamente qué mejorar. 
                Recomendaciones personalizadas basadas en tu negocio real.
              </p>
            </div>
            
            <div style={styles.featureCard}>
              <span style={{...styles.featureIcon, color: '#f59e0b'}}>🔔</span>
              <h3 style={styles.featureTitle}>Alertas Automáticas</h3>
              <p style={styles.featureDescription}>
                Recibe notificaciones cuando algo importante sucede. 
                Nunca te pierdas una oportunidad o un problema crítico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={styles.pricing}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Precios transparentes, valor real</h2>
          <div style={styles.pricingGrid}>
            <div style={styles.pricingCard}>
              <div style={styles.pricingPlan}>Starter</div>
              <div style={styles.pricingPrice}>€0</div>
              <div style={styles.pricingPeriod}>Gratis para siempre</div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>2 conexiones</li>
                <li style={styles.pricingFeature}>Análisis básico</li>
                <li style={styles.pricingFeature}>Dashboard simple</li>
                <li style={styles.pricingFeature}>Soporte por email</li>
              </ul>
              <button 
                style={styles.pricingButton}
                onClick={() => onNavigate('register')}
              >
                Comenzar Gratis
              </button>
            </div>
            
            <div style={{...styles.pricingCard, ...styles.pricingCardPro}}>
              <div style={styles.pricingPlan}>Pro</div>
              <div style={styles.pricingPrice}>€9,95</div>
              <div style={styles.pricingPeriod}>por mes</div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Conexiones ilimitadas</li>
                <li style={styles.pricingFeature}>Insights con IA</li>
                <li style={styles.pricingFeature}>Alertas automáticas</li>
                <li style={styles.pricingFeature}>14 días gratis</li>
              </ul>
              <button 
                style={{...styles.pricingButton, ...styles.pricingButtonWhite}}
                onClick={() => onNavigate('register')}
              >
                Prueba Gratis 14 Días
              </button>
            </div>
            
            <div style={styles.pricingCard}>
              <div style={styles.pricingPlan}>Business</div>
              <div style={styles.pricingPrice}>€19,95</div>
              <div style={styles.pricingPeriod}>por mes</div>
              <ul style={styles.pricingFeatures}>
                <li style={styles.pricingFeature}>Múltiples negocios</li>
                <li style={styles.pricingFeature}>API completa</li>
                <li style={styles.pricingFeature}>Soporte dedicado</li>
                <li style={styles.pricingFeature}>Integraciones custom</li>
              </ul>
              <button 
                style={styles.pricingButton}
                onClick={() => onNavigate('register')}
              >
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>© 2025 BizlyticsApp - Hecho con ❤️ en Asturias</p>
        </div>
      </footer>
    </div>
  );
};

// Componente Login
const LoginPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        onNavigate('dashboard');
      } else {
        alert('Por favor, completa todos los campos');
      }
    }, 1000);
  };

  return (
    <div style={styles.authContainer}>
      <div style={styles.authCard}>
        <h2 style={styles.authTitle}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={styles.submitButton}
          >
            {loading ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          ¿No tienes cuenta? <span onClick={() => onNavigate('register')} style={{ color: '#3b82f6', cursor: 'pointer' }}>Regístrate</span>
        </p>
      </div>
    </div>
  );
};

// Componente Register
const RegisterPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }
    
    setTimeout(() => {
      setLoading(false);
      onNavigate('dashboard');
    }, 1000);
  };

  return (
    <div style={styles.authContainer}>
      <div style={styles.authCard}>
        <h2 style={styles.authTitle}>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nombre:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Contraseña:</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirmar Contraseña:</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              style={styles.input}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={styles.submitButton}
          >
            {loading ? 'Creando...' : 'Crear Cuenta'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          ¿Ya tienes cuenta? <span onClick={() => onNavigate('login')} style={{ color: '#3b82f6', cursor: 'pointer' }}>Inicia sesión</span>
        </p>
      </div>
    </div>
  );
};

// Componente Dashboard
const DashboardPage = ({ onNavigate }) => {
  const handleLogout = () => {
    onNavigate('home');
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.dashboardHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={styles.dashboardTitle}>Dashboard</h1>
          <button 
            onClick={handleLogout}
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
          >
            Cerrar Sesión
          </button>
        </div>
        <p style={{ color: '#64748b', margin: 0 }}>Bienvenido de vuelta, aquí tienes tu resumen</p>
      </div>
      
      <div style={styles.metricsGrid}>
        <div style={styles.metricCard}>
          <div style={{...styles.metricValue, color: '#10b981'}}>€3,245</div>
          <div style={styles.metricLabel}>Ingresos este mes</div>
        </div>
        <div style={styles.metricCard}>
          <div style={{...styles.metricValue, color: '#3b82f6'}}>64</div>
          <div style={styles.metricLabel}>Usuarios activos</div>
        </div>
        <div style={styles.metricCard}>
          <div style={{...styles.metricValue, color: '#f59e0b'}}>3.4%</div>
          <div style={styles.metricLabel}>Tasa de conversión</div>
        </div>
        <div style={styles.metricCard}>
          <div style={{...styles.metricValue, color: '#ef4444'}}>2</div>
          <div style={styles.metricLabel}>Alertas pendientes</div>
        </div>
      </div>
      
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Insights de IA</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#f0f9ff', 
            borderRadius: '8px',
            borderLeft: '4px solid #3b82f6'
          }}>
            <strong style={{ color: '#1e40af' }}>Oportunidad:</strong> Tus conversiones son 23% mejores los martes.
          </div>
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#f0fdf4', 
            borderRadius: '8px',
            borderLeft: '4px solid #10b981'
          }}>
            <strong style={{ color: '#059669' }}>Tendencia:</strong> Tus ingresos han crecido un 15% este mes.
          </div>
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#fffbeb', 
            borderRadius: '8px',
            borderLeft: '4px solid #f59e0b'
          }}>
            <strong style={{ color: '#d97706' }}>Alerta:</strong> Revisa el tráfico de Google Analytics.
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal con navegación
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'login':
        return <LoginPage onNavigate={navigateTo} />;
      case 'register':
        return <RegisterPage onNavigate={navigateTo} />;
      case 'dashboard':
        return <DashboardPage onNavigate={navigateTo} />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return renderPage();
};

export default App;