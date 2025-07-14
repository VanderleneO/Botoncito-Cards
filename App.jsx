// src/App.jsx
import React from 'react';
// ¡CAMBIO AQUÍ! Añade /Botoncito al final de la ruta
import Botoncito from './components/Botoncito/Botoncito'; 
import Card from './components/Card/Card'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>¡Hola, React! Explora Ciudades</h1>

      {/* Tus botones */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
        <Botoncito color="blue" />
        <Botoncito color="green" />
        <Botoncito color="red" />
      </div>

     
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      
        <Card
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Paris_skyline_from_Montmartre_2017-09-02.jpg/800px-Paris_skyline_from_Montmartre_2017-09-02.jpg"
          title="París"
          description="París, la capital de Francia, es una importante ciudad europea y un centro mundial de arte, moda, gastronomía y cultura."
        />

      
        <Card
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/800px-Skyscrapers_of_Shinjuku_2009_January.jpg"
          title="Tokio"
          description="Tokio, la bulliciosa capital de Japón, mezcla lo ultramoderno con lo tradicional, desde rascacielos iluminados por neones hasta templos antiguos."
        />

        <Card
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/New_York_City_Skyline_from_Jersey_City.jpg/800px-New_York_City_Skyline_from_Jersey_City.jpg"
          title="Nueva York"
          description="Nueva York, una metrópolis vibrante, es un centro global de finanzas, cultura, moda y medios de comunicación."
        />

      
        <Card
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Coliseo_de_Roma%2C_Italia%2C_2020-04.jpg/800px-Coliseo_de_Roma%2C_Italia%2C_2020-04.jpg"
          title="Roma"
          description="Roma es la capital de Italia, una vasta ciudad cosmopolita con casi 3.000 años de historia y arte."
        />

      </div>
    </div>
  );
}

export default App;


