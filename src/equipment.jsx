import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function Emplazamientos() {
  const [userIsAdmin, setUserIsAdmin] = useState(false); // Estado para verificar si el usuario es administrador
  const [emplazamientosData, setEmplazamientosData] = useState([]); // Estado para almacenar los datos de los emplazamientos

  useEffect(() => {
    // Simulación de solicitud al backend para verificar el rol del usuario y obtener los datos de los emplazamientos
    // Aquí deberías hacer una solicitud real al backend
    // fetchUserData().then(userData => {
    //   setUserIsAdmin(userData.isAdmin);
    //   setEmplazamientosData(userData.emplazamientos);
    // });

    // Simulamos que el usuario es administrador y obtenemos los datos de los emplazamientos
    setUserIsAdmin(true);
    const mockEmplazamientosData = [
      { id: 1, nombre: 'Emplazamiento 1', equipos: ['Equipo A', 'Equipo B'] },
      { id: 2, nombre: 'Emplazamiento 2', equipos: ['Equipo C', 'Equipo D'] },
      // Agrega más datos de emplazamientos según sea necesario
    ];
    setEmplazamientosData(mockEmplazamientosData);
  }, []);

  // Si el usuario no es un administrador, redirige a la página de inicio
  if (!userIsAdmin) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Emplazamientos</h2>
      <ul>
        {emplazamientosData.map(emplazamiento => (
          <li key={emplazamiento.id}>
            <h3>{emplazamiento.nombre}</h3>
            <ul>
              {emplazamiento.equipos.map(equipo => (
                <li key={equipo}>{equipo}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Emplazamientos;
