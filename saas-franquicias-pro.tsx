import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Home, DollarSign, BarChart2, Settings, HelpCircle, Users, FileText, Coffee } from 'lucide-react';

// Landing Page Component
const LandingPage = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Coffee className="h-8 w-8 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">FranquiciasApp</h1>
        </div>
        <nav>
          <Button variant="ghost" onClick={() => onNavigate('pricing')}>Precios</Button>
          <Button variant="ghost" onClick={() => onNavigate('login')}>Iniciar Sesión</Button>
          <Button variant="default" onClick={() => onNavigate('login')}>Prueba Gratis</Button>
        </nav>
      </div>
    </header>
    <main className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Potencia tu red de franquicias
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          FranquiciasApp te ofrece todas las herramientas necesarias para administrar, analizar y hacer crecer tu red de franquicias de manera eficiente.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Button size="lg" onClick={() => onNavigate('login')}>Comienza tu prueba gratuita</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          { title: "Gestión Centralizada", icon: Home, description: "Administra todas tus franquicias desde un solo lugar." },
          { title: "Análisis Avanzado", icon: BarChart2, description: "Obtén insights valiosos con nuestras herramientas de análisis." },
          { title: "Soporte 24/7", icon: HelpCircle, description: "Nuestro equipo está siempre disponible para ayudarte." }
        ].map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="h-12 w-12 text-blue-600 mb-2" />
              <h3 className="text-lg font-medium">{feature.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-500">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  </div>
);

// Pricing Component
const Pricing = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Planes y Precios</h1>
        <Button variant="outline" onClick={() => onNavigate('landing')}>Volver al Inicio</Button>
      </div>
    </header>
    <main className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          Elige el plan perfecto para tu negocio
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Ofrecemos planes flexibles que se adaptan a las necesidades de tu red de franquicias.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          { name: "Básico", price: "29", features: ["Hasta 5 franquicias", "Reportes básicos", "Soporte por email"] },
          { name: "Pro", price: "99", features: ["Hasta 20 franquicias", "Reportes avanzados", "Soporte prioritario", "API access"] },
          { name: "Enterprise", price: "299", features: ["Franquicias ilimitadas", "Reportes personalizados", "Gerente de cuenta dedicado", "Implementación personalizada"] }
        ].map((plan, index) => (
          <Card key={index} className={index === 1 ? "border-blue-500 border-2" : ""}>
            <CardHeader>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-4xl font-extrabold mt-2">${plan.price}<span className="text-xl font-normal">/mes</span></p>
            </CardHeader>
            <CardContent>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full" onClick={() => onNavigate('login')}>Seleccionar Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  </div>
);

// Login Component
const Login = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">Iniciar Sesión</Button>
            <Button variant="outline" className="w-full" onClick={onLogin}>Demo</Button>
          </form>
          <div className="mt-4 text-center">
            <Button variant="link" onClick={() => onNavigate('landing')}>Volver al Inicio</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('home');

  const MenuItem = ({ icon: Icon, text, section }) => (
    <div 
      className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${activeSection === section ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
      onClick={() => setActiveSection(section)}
    >
      <Icon size={20} />
      <span>{text}</span>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Resumen General</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent>
                  <h3 className="font-bold">Ventas Totales</h3>
                  <p className="text-2xl">$1,234,567</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="font-bold">Franquicias Activas</h3>
                  <p className="text-2xl">42</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="font-bold">Satisfacción del Cliente</h3>
                  <p className="text-2xl">4.8/5</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'stats':
        return <h2 className="text-2xl font-bold">Estadísticas Detalladas</h2>;
      case 'finance':
        return <h2 className="text-2xl font-bold">Información Financiera</h2>;
      case 'franchises':
        return <h2 className="text-2xl font-bold">Gestión de Franquicias</h2>;
      case 'reports':
        return <h2 className="text-2xl font-bold">Reportes</h2>;
      case 'settings':
        return <h2 className="text-2xl font-bold">Configuración</h2>;
      case 'help':
        return <h2 className="text-2xl font-bold">Centro de Ayuda</h2>;
      default:
        return <h2 className="text-2xl font-bold">Bienvenido al Dashboard</h2>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white p-4 shadow-lg">
        <div className="flex items-center mb-6">
          <Coffee className="h-8 w-8 text-blue-600 mr-2" />
          <h2 className="text-xl font-bold">FranquiciasApp</h2>
        </div>
        <MenuItem icon={Home} text="Inicio" section="home" />
        <MenuItem icon={BarChart2} text="Estadísticas" section="stats" />
        <MenuItem icon={DollarSign} text="Finanzas" section="finance" />
        <MenuItem icon={Users} text="Franquicias" section="franchises" />
        <MenuItem icon={FileText} text="Reportes" section="reports" />
        <MenuItem icon={Settings} text="Configuración" section="settings" />
        <MenuItem icon={HelpCircle} text="Ayuda" section="help" />
        <Button className="mt-4 w-full" onClick={onLogout}>Cerrar Sesión</Button>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('landing');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'landing' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'login' && <Login onLogin={handleLogin} onNavigate={handleNavigate} />}
      {currentPage === 'pricing' && <Pricing onNavigate={handleNavigate} />}
      {currentPage === 'dashboard' && isAuthenticated && <Dashboard onLogout={handleLogout} />}
    </div>
  );
};

export default App;
