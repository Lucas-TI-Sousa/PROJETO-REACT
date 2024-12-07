import React, { useRef } from 'react';
import './App.css';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  setupIonicReact, IonSearchbar } from '@ionic/react';
  import AnimalCard from './components/Card.tsx';
  import CardCarousel from './CardCarousel'; 

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
          <h2>ANIMAIS PARA ADOÇÃO</h2>
        <div className='card-app'>
      <CardCarousel animal="Cachorro" />
      <CardCarousel animal="Gato" />
      <CardCarousel animal="Cobra" />
      <CardCarousel animal="Pássaros" />
      <CardCarousel animal="Roedores" />
        </div>

        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
