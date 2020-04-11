import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import theMugPlug from '../assets/images/theMugPlug.png';
import voyageVoyage from '../assets/images/voyage.png';
import theHangMan from '../assets/images/hangman.png';


class Portfolio extends React.Component{

    render() 
        {

            
            return(
                <>
               
                <div className='portfolio-container'>
                    <h6>The Mug Plug</h6>
                    <img src={theMugPlug} alt='' ></img>
                    <p className='portfolio-text'>E-commerce crée avec React et Symfony</p>
                    <div>
                    <a href="" class="button-site">Website</a>
                    <a href="https://github.com/IssaDia/TheMugPlugShop" class="button-code">GitHub</a>

                    </div>
                </div>
                <hr></hr>
                <div className='portfolio-container'>
                    <h6>Voyage Voyage</h6>
                    <img src={voyageVoyage} alt='' ></img>
                    <p className='portfolio-text'>Blog de voyage crée avec Symfony 4.2</p>
                    <div>
                    <a href="" class="button-site">Website</a>
                    <a href="https://github.com/IssaDia/blogVoyageSymfony" class="button-code">GitHub</a>


                    </div>
                </div>
                <div className='portfolio-container'>
                <hr></hr>
                    <h6>The Hanged Man</h6>
                    <img src={theHangMan} alt='' ></img>
                    <p className='portfolio-text'>Jeu du pendu  crée avec React</p>
                    <div>
                    <a href="" class="button-site">Website</a>
                    <a href="https://github.com/IssaDia/penduReact" class="button-code">GitHub</a>


                    </div>
                </div>
                </>
                
            )       
    }

}

// ========================================
  
ReactDOM.render(
    <Portfolio />
    ,
    document.getElementById('root')
  );

  export default Portfolio;