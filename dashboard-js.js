import React, { useState } from 'react';
import { Card, Button, MenuItem } from './components';
import { Home, DollarSign, BarChart2, Users, FileText, Settings, HelpCircle } from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Panel de Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Ventas Totales" value="$45,231.89" />
              <Card title="Franquicias Activas" value="573" />
              <Card title="Satisfacción del Cliente" value="98%" />
            </div>
          </div>
        );
      case 'franchises':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Gestión de Franquicias</h2>
            <Button>Añadir Nueva Franquicia</Button>
            <ul className="mt-4">
              <li>Franquicia A - Madrid</li>
              <li>Franquicia B - Barcelona</li>
              <li>Franquicia C - Valencia</li>
            </ul>
          </div>
        );
      default:
        return <h2 className="text-2xl font-bold">Contenido en desarrollo</h2>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-6">FranMaker</h2>
        <MenuItem icon={Home} text="Inicio" onClick={() => setActiveSection('home')} />
        <MenuItem icon={BarChart2} text="Estadísticas" onClick={() => setActiveSection('stats')} />
        <MenuItem icon={DollarSign} text="Finanzas" onClick={() => setActiveSection('finance')} />
        <MenuItem icon={Users} text="Franquicias" onClick={() => setActiveSection('franchises')} />
        <MenuItem icon={FileText} text="Reportes" onClick={() => setActiveSection('reports')} />
        <MenuItem icon={Settings} text="Configuración" onClick={() => setActiveSection('settings')} />
        <MenuItem icon={HelpCircle} text="Ayuda" onClick={() => setActiveSection('help')} />
      </div>
      <div className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
