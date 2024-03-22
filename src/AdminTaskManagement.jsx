import React, { useState } from 'react';

function AdminTasksManagement() {
  const [task, setTask] = useState('');
  const [assignedTechnician, setAssignedTechnician] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAssignedTechnicianChange = (event) => {
    setAssignedTechnician(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    // Por ejemplo, puedes usar una función para asignar tareas a técnicos en tu API
    console.log('Task:', task);
    console.log('Assigned Technician:', assignedTechnician);
    // Limpia los campos del formulario después de enviar los datos
    setTask('');
    setAssignedTechnician('');
  };

  return (
    <div>
      <h2>Administración de Tareas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Tarea:</label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={handleTaskChange}
            required
          />
        </div>
        <div>
          <label htmlFor="assignedTechnician">Técnico Asignado:</label>
          <input
            type="text"
            id="assignedTechnician"
            value={assignedTechnician}
            onChange={handleAssignedTechnicianChange}
            required
          />
        </div>
        <button type="submit">Asignar Tarea</button>
      </form>
    </div>
  );
}

export default AdminTasksManagement;
