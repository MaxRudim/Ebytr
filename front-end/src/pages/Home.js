import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    fetch('http://localhost:3001')
    .then(response => response.json())
    .then((data) => console.log(data))
  }, []);
  return (
    <h1>Lista de tarefas</h1>
  );
}

export default Home;
