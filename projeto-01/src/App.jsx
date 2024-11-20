import React from 'react';
import './App.css';

// Dados dos animais
const animais = [
  {
    nome: 'Leão',
    descricao: 'O leão é um dos maiores felinos do mundo, conhecido como o rei da selva.',
    imagem: '',
  },
  {
    nome: 'Elefante',
    descricao: 'O elefante é o maior animal terrestre, com uma enorme tromba e orelhas largas.',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/African_Bush_Elephant.jpg',
  },
  {
    nome: 'Girafa',
    descricao: 'A girafa é o animal terrestre mais alto, com pescoço longo e manchas características.',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Giraffa_camelopardalis_-_Jabiru_2005.jpg',
  },
  {
    nome: 'Cachorro',
    descricao: 'O cachorro é um dos animais mais queridos como pet, conhecido pela sua lealdade e amizade.',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Poodle.jpg',
  },
  {
    nome: 'Gato',
    descricao: 'O gato é um dos animais de estimação mais populares, conhecido pela sua agilidade e independência.',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Cat03.jpg',
  },
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Página dos Animais</h1>
      </header>

      <div className="animais-lista">
        {animais.map((animal, index) => (
          <div key={index} className="animal-card">
            <img src={animal.imagem} alt={animal.nome} className="animal-imagem" />
            <h2>{animal.nome}</h2>
            <p>{animal.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
