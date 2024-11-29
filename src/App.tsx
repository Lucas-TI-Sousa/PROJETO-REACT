import React, { useRef } from 'react';
import './App.css';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  setupIonicReact, IonSearchbar } from '@ionic/react';
  import AnimalCard from './components/Card.tsx';
  import Carousel from './Carousel';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

setupIonicReact();
const App = () => {
  const animals = useRef([
    {
      id: 1,
      name: 'Cachorro',
      image: '/pastor-alemão.jpg', // Use uma URL válida de imagem
      description: 'O leão é o rei da selva, conhecido por sua força e coragem.'
    },
    {
      id: 2,
      name: 'Cachorro',
      image: '/pit-bull.avif',
      description: 'Os elefantes são conhecidos pela sua inteligência e tamanho imponente.'
    },
    {
      id: 3,
      name: 'Panda',
      image: 'https://example.com/panda.jpg',
      description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.'
    }
    // Adicione mais animais conforme necessário
  ]);

  console.log(animals)

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <div className="cantaine">
            <IonTitle className='meus-pets'>MEUS PETS</IonTitle>
            </div>
        </IonHeader>

        <IonContent  fullscreen={true} className="ion-padding">
        <IonSearchbar placeholder="Custom Placeholder"></IonSearchbar>
        <div>
      <h1>Carrossel de Cards</h1>
      <Carousel />
    </div>
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
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
