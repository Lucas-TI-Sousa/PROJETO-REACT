import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnimalCard from './components/Card.tsx';
 import 'swiper/swiper-bundle.css';
import './CardCarousel.css';
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react';

/** 
 * animal: nome do animal
 * list: acessa o array  de animais */

const CardCarousel = ({ animal, lista }) => {

 

  const [isOpen, setIsOpen] = useState(false);
  const [imagem, salvarImage] = useState([])
  



  function openModal(animal) {
    console.log(animal)
    setIsOpen(true)
    salvarImage(animal)
  }

  return (
    <>
      <h4 className='titulo'>{animal}</h4>
      <Swiper
        slidesPerView={3} // Exibe 3 cartões por vez
        loop={true} // Faz o loop dos slides
        spaceBetween={20} // Espaçamento entre os slides
        breakpoints={{

          768: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 1,
          },
        }}
      >
        <div className="card-container">
          {lista.map((animal) => (
            <SwiperSlide key={animal.id}>
              <div className="card" onClick={() => openModal(animal)}>
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="card-image"
                  style={{ width: '100%', height: '120px' }}
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
          <AnimalCard
                name={imagem.name}
                image={imagem.image}
                description={imagem.description}
              />
          </div>
          </IonContent>
        </IonModal>
    </>
  )
};
export default CardCarousel;

