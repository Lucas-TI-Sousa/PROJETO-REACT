import React, { useState } from 'react';
import './Carousel.css'; // Para estilizar o carrossel


// Dados dos cards com imagem
const cardsData = [
  { 
    id: 1, 
    title: "Card 1", 
    description: "Descrição do Card 1", 
    imageUrl: "/pastor-alemão.jpg" 
  },
  { 
    id: 2, 
    title: "Card 2", 
    description: "Descrição do Card 2", 
    imageUrl: "pit-bull.avif" 
  },
  { 
    id: 3, 
    title: "Card 3", 
    description: "Descrição do Card 3", 
    imageUrl: "https://via.placeholder.com/150" 
  },
  { 
    id: 4, 
    title: "Card 4", 
    description: "Descrição do Card 4", 
    imageUrl: "https://via.placeholder.com/150" 
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? cardsData.length - 1 : currentIndex - 1
    );
  };

  const handleButtonClick = (title) => {
    alert(`Botão do ${title} foi clicado!`);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-cards">
        <div className="card">
          <img 
            src={cardsData[currentIndex].imageUrl} 
            alt={cardsData[currentIndex].title} 
            className="card-image"
          />
          <h3>{cardsData[currentIndex].title}</h3>
          <p>{cardsData[currentIndex].description}</p>
          <button 
            className="card-button" 
            onClick={() => handleButtonClick(cardsData[currentIndex].title)}
          >
            Clique Aqui
          </button>
        </div>
      </div>
      <button className="prev-btn arrow" onClick={handlePrev}>Prev</button>
      <button className="next-btn arrow" onClick={handleNext}>Next</button>
    </div>
  );
};
export default Carousel;
