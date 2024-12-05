import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importando os estilos do Swiper

const CardCarousel = ({ animal }) => {
  const animals = useRef([
    {
      id: 1,
      name: 'Cachorro',
      image: '/pastor-alemão.jpg', // Substitua com o caminho correto ou URL da imagem
      // description: 'O pastor alemão é conhecido por sua inteligência e lealdade.',
    },
    {
      id: 2,
      name: 'Pit Bull',
      image: '/pit-bull.avif',
      // description: 'O pit bull é um cão forte e corajoso, conhecido por sua lealdade.',
    },
    {
      id: 3,
      name: 'Panda',
      image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
      // description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    {
      id: 3,
      name: 'Panda',
      image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
      // description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    {
      id: 3,
      name: 'Panda',
      image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
      // description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    // Adicione mais animais conforme necessário
  ]);

  return (
    <>
      <h1>{animal}</h1>
      <Swiper
        slidesPerView={3} // Exibe 3 cartões por vez
        loop={true} // Faz o loop dos slides
        spaceBetween={20} // Espaçamento entre os slides
        navigation={true} // Habilita a navegação com setas (opcional)
        breakpoints={{
          // Ajuste o número de slides exibidos em diferentes tamanhos de tela
          // 768: {
          //   slidesPerView: 2,
          // },
          // 480: {
          //   slidesPerView: 1,
          // },
        }}
      >
        <div className="card-container">
        {animals.current.map((animal) => (
          <SwiperSlide key={animal.id}>
            <div className="card">
              <img
                src={animal.image}
                alt={animal.name}
                className="card-image"
                style={{ width: '100%', height: 'auto' }}
              />
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>
    </>
  );
};

export default CardCarousel;


