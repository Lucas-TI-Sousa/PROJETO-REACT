import React, {useState, useEffect, useRef } from 'react';
import './App.css';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  setupIonicReact, IonSearchbar, IonButton, IonIcon } from '@ionic/react';
  import AnimalCard from './components/Card.tsx';
  import CardCarousel from './CardCarousel'; 
  import { heart, heartDislike } from 'ionicons/icons'; 
  import axios from 'axios';
  

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
  const buscar= useRef(true); 
  const [animais,setAnimais] = useState({
    cachorro: [],
    gato: []
  })
 
  // const Cachorro = useRef([
  //   {
  //     id: 1,
  //     name: 'Cachorro',
  //     image: '/pastor-alemão.jpg', // Substitua com o caminho correto ou URL da imagem
  //     description: 'O pastor alemão é conhecido por sua inteligência e lealdade.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Pit Bull',
  //     image: '/pit-bull.avif',
  //     description: 'O pit bull é um cão forte e corajoso, conhecido por sua lealdade.',
  //   },
  //   {
  //     id: 3,
  //     name: 'Cachorro',
  //     image: '/cachorro-1.jpg', // Substitua com uma URL válida
  //     description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Cachorro',
  //     image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
  //     description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
  //   },
  //   {
  //     id: 5,
  //     name: 'Cachorro',
  //     image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
  //      description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
  //   },
  //   // Adicione mais animais conforme necessário
  // ]);
  const Gato = useRef([
    {
      id: 1,
      name: 'Gato',
      image: '/gato-1.webp', // Substitua com o caminho correto ou URL da imagem
      description: 'O pastor alemão é conhecido por sua inteligência e lealdade.',
    },
    {
      id: 2,
      name: 'Gato',
      image: '/gato-2.jpg',
      description: 'O pit bull é um cão forte e corajoso, conhecido por sua lealdade.',
    },
    {
      id: 3,
      name: 'gato',
      image: '/gato-3.avif', // Substitua com uma URL válida
      description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    {
      id: 4,
      name: 'gato',
      image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
      description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    {
      id: 5,
      name: 'gato',
      image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
       description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',

    },
    // Adicione mais animais conforme necessário
  ]);
  const Cobra = useRef([
    {
      id: 1,
      name: 'Cobra',
      image: '/cobra-1.webp', // Substitua com o caminho correto ou URL da imagem
      description: 'O pastor alemão é conhecido por sua inteligência e lealdade.',
    },
    {
      id: 2,
      name: 'Cobra',
      image: '/cobra-2.jpg',
      description: 'O pit bull é um cão forte e corajoso, conhecido por sua lealdade.',
    },
    {
      id: 3,
      name: 'Cobra',
      image: '/cobra-3.webp', // Substitua com uma URL válida
      description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    {
      id: 4, 
      name: 'Cobra',
      image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
      description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    {
      id: 5,
      name: 'Cobra',
      image: 'https://example.com/panda.jpg', // Substitua com uma URL válida
       description: 'Pandas são animais nativos da China, conhecidos por sua aparência fofa.',
    },
    // Adicione mais animais conforme necessário
  ]);
  
  useEffect(() => {
    if (!buscar.current) return;


   
   axios.get("/Lista_animais.json", {
       headers: {
           "Access-Control-Allow-Origin": "*"
       }
   })        
   .then((res) => {
       console.log(res);
       setAnimais(res.data);
     //  setListagem(res.data.professores)
   })  
   buscar.current = false;
}, [buscar] );

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
        <CardCarousel animal={"Cachorro"} lista={animais.cachorro} />
        <CardCarousel animal={"Gato"} lista={Gato.current}/>
        <CardCarousel animal={"Cobra"} lista={Cobra.current}/>
        </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
