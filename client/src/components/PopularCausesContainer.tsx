import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg, IonListHeader } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, logoFacebook, logoTwitter, logoInstagram} from 'ionicons/icons';

import { Icon, InlineIcon } from '@iconify/react';
import handHoldingWater from '@iconify/icons-fa-solid/hand-holding-water';
import healthServices from '@iconify/icons-medical-icon/health-services';
import mentalHealthFill from '@iconify/icons-ri/mental-health-fill';
import educationIcon from '@iconify/icons-zondicons/education';

import ReactDOM from 'react-dom';


import './PopularCausesContainer.css';

interface ContainerProps { }

const PopularCausesContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid>
    <IonRow>
      <IonCol size="12" offset="5">
        <h1>Popular Causes</h1>
      </IonCol>          
    </IonRow>

    <IonRow>
      <IonCol size="3">
        <IonButton class="btn-popular-causes" expand="full" fill="clear">
          <Icon icon={educationIcon} width={32} height={32} color="#fff"/>
          Education
        </IonButton>
      </IonCol>
      <IonCol size="3">
      <IonButton class="btn-popular-causes" expand="full" fill="clear">
          <Icon icon={mentalHealthFill} width={32} height={32} color="#fff"/>
          Mental Health
        </IonButton>
      </IonCol>
      <IonCol size="3">
      <IonButton class="btn-popular-causes" expand="full" fill="clear">
          <Icon icon={healthServices} width={32} height={32} color="#fff"/>
          Health
        </IonButton>
      </IonCol>
      <IonCol size="3">
      <IonButton class="btn-popular-causes" expand="full" fill="clear">
          <Icon icon={handHoldingWater} width={32} height={32} color="#fff"/>
          Clean Water
      </IonButton>
      </IonCol>

    </IonRow>     
    </IonGrid>    

  );
};

export default PopularCausesContainer;
