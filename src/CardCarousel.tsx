import React, { useEffect, useRef, useState } from 'react';
import { Drivers, Storage } from '@ionic/storage';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnimalCard from './components/Card.tsx';
 import 'swiper/swiper-bundle.css';
import './CardCarousel.css';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { heart, heartDislike } from 'ionicons/icons';

/** 
 * animal: nome do animal
 * list: acessa o array  de animais */

const CardCarousel = ({ animal, lista }) => {

 
  const [favorities, setFavorities] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [imagem, salvarImage] = useState([])
  

  function openModal(animal) {
    setIsOpen(true)
    salvarImage(animal)
  }
  

  const storage = new Storage({
    name: '__mydb',
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
  });

  const toggleToFavorities = (index: any) => {

    if (favorities.indexOf(index) === -1) {       
        setFavorities(() => favorities.concat([index]));
        return;
    }

    if (favorities.indexOf(index) !== -1) {
        setFavorities(() => favorities.filter((e,i) => e !== index));
    }

}


useEffect(() => { 

  if (!favorities || favorities.length === 0) return;

  storage.create().then(() => {
    storage.set('favs', JSON.stringify(favorities));
})

}, [favorities])

useEffect(() => {
  if (!buscar.current) return;
  buscarProfessores();
  getFavorities();
  buscar.current = false;
}, [buscar] );

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
          {lista.map((animal,index) => (
            <SwiperSlide key={animal.id}>
              <div className="card" onClick={() => openModal(animal)}>
                <IonButton onClick={() => toggleToFavorities(index)} className={" favButton " + (favorities.indexOf(index) !== -1 && "active")}>
                  {favorities.indexOf(index) === -1 && <IonIcon icon={heart}></IonIcon>}
                  {favorities.indexOf(index) !== -1 && <IonIcon icon={heartDislike}></IonIcon>}
                </IonButton>
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

