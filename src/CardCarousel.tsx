import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnimalCard from './components/Card.tsx';
 import 'swiper/swiper-bundle.css';
import './CardCarousel.css';
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react';

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
      //  description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    // Adicione mais animais conforme necessário
  ]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h4>{animal}</h4>
      <Swiper
        slidesPerView={3} // Exibe 3 cartões por vez
        loop={true} // Faz o loop dos slides
        spaceBetween={20} // Espaçamento entre os slides
        breakpoints={{

          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
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
                {/* <p>{animal.description}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
          <div className="card-container">
            {animals.current.map((animal) => (
              <AnimalCard
                key={animal.id}
                name={animal.name}
                image={animal.image}
                description={animal.description}
              />
            ))}
          </div>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p> */}
          </IonContent>
        </IonModal>
    </>
  )
};
export default CardCarousel;

