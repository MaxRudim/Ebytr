import React, { useEffect, useState } from 'react';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTask] = useState();

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3001')
    .then(response => response.json())
    .then((data) => {
      setTask(data);
      setIsLoading(false)
    })
  }, []);
  return (
    <div>
      <h1>Lista de tarefas Ebytr.</h1>

      {isLoading ? <p>Carregando...</p>
        : ( 
          <div>
            {tasks.map(task => (
              <div className="tasks-container" key={task.id}>
                <h2 className="tasks-description">{task.description}</h2>
                <h3 className="tasks-deadline">{task.deadline}</h3>
                <p className="tasks-assignee">{task.assignee}</p>
                <p className="tasks-assignedby">{task.assignedBy}</p>
              </div>
            ))}
          </div>
      )}
    </div>    
  );
}

export default Home;
