import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'; // Importa tu componente de barra de navegación aquí
// import Home from './Home'; // Importa tu componente de página de inicio u otra página principal aquí
import TechnicianRegistration from './TechnicianRegistration'; // Importa tu componente de registro de técnicos aquí
import AdminTasksManagement from './AdminTaskManagement'; // Importa tu componente de administración de tareas aquí
import LoginForm from './LoginForm'; //Importar mi componente de Login

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Renderiza tu barra de navegación */}
        <Switch>
          {/* <Route exact path="/" component={Home} /> */} {/* Página de inicio */}
          <Route path="/registro-tecnico" component={TechnicianRegistration} /> {/* Registro de técnicos */}
          <Route path="/administrar-tareas" component={AdminTasksManagement} /> {/* Administración de tareas */}
          <Route path="/login" component={LoginForm} /> {/* Formulario de login */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

