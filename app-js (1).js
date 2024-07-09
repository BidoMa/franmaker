import React, { useState } from 'react';
import Dashboard from './Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <div>
          <h1>Bienvenido a FranMaker</h1>
          <button onClick={() => setIsAuthenticated(true)}>Iniciar Sesión</button>
        </div>
      )}
    </div>
  );
};

export default App;
