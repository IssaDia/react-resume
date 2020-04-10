import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';



class Experiences extends React.Component{

    render() 
        {
            return(
                <>
               
                <div>
                    <h5>Développeur web</h5>
                    <p className='xp-title'>BUSINESS et DECISION (Lyon) | <span className='xp-date'>Juillet 2019 - Septembre 2019</span></p>
                    <p className='xp-text'>J’ai eu l’opportunité d’intégrer cette société et d’effectuer une montée en compétences sur le CMS Magento. 
                        Cette expérience m’a permise de progresser en Php, en programmation orientée objet ainsi qu’en Jquery qui font partie 
                        intégrante de cette plateforme. Cela m’a permis aussi de participer activement à la réalisation d’une démo suite à un appel 
                        d’offres d’un grand groupe de fabrication de sols en étant notamment force de proposition lors de nos  différentes réunions 
                        nécessaire à la réalisation de ce projet.</p>
                </div>
                <div>
                    <h5>Développeur web</h5>
                    <p className='xp-title'>IDO DATA (Vlleurbanne) | <span className='xp-date'>Janvier 2019 - Avril 2019</span></p>
                    <p className='xp-text'>J'ai effectué mon stage de fin de formation au sein de cette start-up durant lequel ma mission était de créer un espace client 
                        dynamique sur un site Wordpress. Cet espace permet aux clients d'avoir notamment accès à des données de consommations par le biais 
                        de jauges que j'ai crée en Javascript. Les données de consommation ainsi que d'autres informations relatives au client sont remontées 
                        depuis la base de données faisant partie d'Amazon Web Services en utilisant des requêtes GraphQL. Le cheminement des données s'effectue 
                        par le biais d'une API sécurisée.</p>
                </div>
                <div>
                    <h5>Assistant administratif/ Gestionnaire de paie</h5>
                    <p className='xp-title'>BUSINESS et DECISION (Lyon) | <span className='xp-date'>Juillet 2019 - Septembre 2019</span></p>
                    <p className='xp-text'>J'étais au sein d'une équipe au siége du groupe chargé de la gestion de la paie d'environ 2000 intérimaires. J'avais aussi des missions 
                        telles que la gestion des contrats de travail ainsi que la saisie sur salaires.</p>
                </div>
                </>
            )       
    }

}

// ========================================
  
ReactDOM.render(
    <Experiences />
    ,
    document.getElementById('root')
  );

  export default Experiences;