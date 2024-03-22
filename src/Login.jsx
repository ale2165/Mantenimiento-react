import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Aquí puedes agregar la lógica para autenticar al usuario
      // Por ejemplo, puedes llamar a una API para verificar las credenciales del usuario
      await authenticateUser(email, password);
      
      // Si el usuario se autentica correctamente, llamas a la función onLogin
      onLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  const authenticateUser = async (email, password) => {
    // Aquí iría la lógica para autenticar al usuario
    // Por ejemplo, puedes hacer una solicitud a tu API para verificar las credenciales del usuario
    // Esto es solo un ejemplo, deberías adaptarlo según tu implementación
    if (email === 'user@example.com' && password === 'password') {
      // Usuario autenticado correctamente
      return;
    } else {
      throw new Error('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
