// src/App.jsx
import React from 'react';
import Botoncito from './components/Botoncito/Botoncito';
import Card from './components/Card/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>¡Hola,Explora Emojis!</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
        <Botoncito color="gold" texto=" Feliz" />
        <Botoncito color="red" texto=" Amor" />
        <Botoncito color="blue" texto=" Pensando" />
        <Botoncito color="purple" texto=" Riendo a Carcajadas" />
        <Botoncito color="green" texto=" Todas las Emociones" />
      </div>

      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        <Card
          title="Cara Sonriente con Ojos Sonrientes"
          emoji="😄"
          meaning="Expresa alegría radiante, felicidad pura y una sonrisa de oreja a oreja."
        />

        <Card
          title="Cara de Corazones"
          emoji="😍"
          meaning="Muestra amor, enamoramiento, admiración o la sensación de estar cautivado por algo o alguien."
        />

        <Card
          title="Cara Besando con Ojos Cerrados"
          emoji="😚"
          meaning="Un beso tierno, afectuoso o de despedida. A menudo expresa cariño sincero."
        />

        <Card
          title="Cara con Sonrisa y Ojos de Corazón"
          emoji="🥰"
          meaning="Representa una sensación cálida y difusa de ser amado, cuidado o de sentir un profundo afecto."
        />

        <Card
          title="Cara Rodando por el Suelo de Risa"
          emoji="🤣"
          meaning="Indica una risa incontrolable, tan fuerte que uno podría 'rodar por el suelo riendo'."
        />

      </div>
    </div>
  );
}

export default App;