import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';




class Formation extends React.Component{


    render() 
        {
            return(
                <>
                
                <div>
                    <h5>Formation développeur web avancé (certification)</h5>
                    <p>CEGEFOS (Aix en Provence) | Novembre 2019 - Décembre 2019</p>
                    <p>Modules de la formation</p>
                    <ul>
                        <li>
                            <span>React Js</span>
                        </li>
                        <li>
                        <span>Vue Js</span>

                        </li>
                        <li>
                        <span>Backbone Js</span>

                        </li>
                        <li>
                        <span>D3 Js</span>

                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Développeur web/ web mobile (bac+2)</h5>
                    <p>Human Booster (Lyon) | Juillet 2018 - Avil 2019</p>
                    <p>Projet personnel : Création d'un blog de voyage avec Symfony 4</p>
                    <ul>
                        <li>
                            <span>Utilisation de Composer et diverses dépendances</span>
                        </li>
                        <li>
                        <span>Création, modification et suppression d'articles</span>
                        </li>
                        <li>
                        <span>Section commentaires et formulaires</span>
                        </li>
                        <li>
                        <span>Gestion de Doctrine et de l’accès aux données</span>
                        </li>
                    </ul>
                </div>
                <div>
                <h5>E-learning</h5>
                    <p>OpenClassRooms | Juin 2018 - Maintenant</p>
                </div>
                <div>
                <h5>DUT Gestion des entreprises et des administrations (Bac+2)</h5>
                    <p>Université de lille 1 (Villeneuve d'Ascq) | Septembre 2014 - Juin 2016</p>
                </div>
               
                </>
                
            )       
    }

}

// ========================================
  
ReactDOM.render(
    <Formation />
    ,
    document.getElementById('root')
  );

  export default Formation;