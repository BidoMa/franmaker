import React, { useState } from 'react';
import DashboardFranmaker from './DashboardFranmaker';

const Aplicacion = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      {isAuthenticated ? (
        <DashboardFranmaker />
      ) : (
        <div>
          <h1>Bienvenido a FranMaker</h1>
          <button onClick={() => setIsAuthenticated(true)}>Iniciar Sesión</button>
        </div>
      )}
    </div>
  );
};

export default Aplicacion;
