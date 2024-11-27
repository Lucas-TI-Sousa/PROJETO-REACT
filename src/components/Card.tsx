import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';

interface AnimalCardProps {
  name: string;
  image: string;
  description: string;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ name, image, description }) => {
  return (
    <IonCard>
      <IonImg src={image} alt={name} />
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{description}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default AnimalCard;
