import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonList, 
  IonItem, IonCard, IonCardContent, IonCardTitle, IonLabel, IonInput, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonFooter, IonText } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical, 
  medkit, colorFill, heartHalf , languageSharp, notifications, logoAmazon } from 'ionicons/icons';

import React from 'react';
import ReactDOM from 'react-dom';


import './DonatePage.css';
import FooterContainer from '../components/FooterContainer';

const DonatePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="toolbar-top">
          <IonTitle size="small" class="toolbar-title"><img alt="logo" id="header_logo" width="120" height="55" background-color="black" float-left src="./assets/images/craigsdonors_logo.png"/></IonTitle>

          <IonButtons slot="secondary">
            <IonButton color="primary" expand="block" fill="clear" routerLink="/home">Home</IonButton>
            <IonButton color="secondary" expand="block" fill="clear" routerLink="/trendingpage">Community</IonButton>
            <IonButton color="tertiary" expand="block" fill="clear" routerLink="/aboutpage">About Us</IonButton>
          </IonButtons>

          <IonButtons slot="primary">
            <IonButton fill="clear">
            <IonIcon slot="start" icon={notifications} />
            </IonButton>
            <IonButton size="large" fill="solid" color="tertiary">
              Sign out
            </IonButton>                        
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>                                
          <IonGrid class="display-grid">
            <IonRow class="row-style">
              <IonCol class="col-style"><div>Donate to Homeless Entrepreneur</div></IonCol>
            </IonRow>
            <IonRow class="row-style">
                        <h1>Homeless Entrepreneur’s mission is to promote economic empowerment and poverty reduction via work and 
                          active citizenship, so people living in social exclusion can improve their quality of life. We believe every citizen 
                          has the opportunity to participate regardless of age, gender, sexual preference, political alliance, or religious 
                          belief. We invite everyone to join us in our mission. 
                        </h1>              
            </IonRow>  
            <IonRow class="row-style">
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning" href="./assets/external/amazonpay_10.html">$5</IonButton></IonCol>
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning" href="./assets/external/amazonpay_10.html">$10</IonButton></IonCol>
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning" href="./assets/external/amazonpay_10.html">$20</IonButton></IonCol>              
            </IonRow>
            <IonRow class="row-style">
            <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning" href="./assets/external/amazonpay_10.html">$50</IonButton></IonCol>
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning" href="./assets/external/amazonpay_10.html">$100</IonButton></IonCol>
              <IonCol class="col-style"><IonButton size="large" class="btn-donate" color="warning" href="./assets/external/amazonpay_10.html">$200</IonButton></IonCol>              
            </IonRow>            
            <IonRow class="row-style">              
              <IonCol class="col-style" size="4" offset="4" >
                <IonButton size="large" color="warning" routerLink="/donateconfirmpage">
                <IonIcon slot="start" icon={logoAmazon} />Donate  with Amazon Pay
                </IonButton>
              </IonCol>
            </IonRow>                        
          </IonGrid>

      </IonContent>
      
      {/* Footer container here */}
      <FooterContainer/>      

    </IonPage>
  );
};

export default DonatePage;