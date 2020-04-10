import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import theMugPlug from '../assets/images/theMugPlug.png';

class Portfolio extends React.Component{

    render() 
        {
            return(
                <>
               
                <div className='portfolio-container'>
                    <h6>The Mug Plug</h6>
                    <img src={theMugPlug} height='250px' width='250px' alt='' ></img>
                    <p>E-commerce crée avec React et Symfony</p>
                    <div>
                    <a href="" class="button-site">Website</a>
                    <a href="" class="button-code">GitHub</a>

                    </div>
                </div>
                <hr></hr>
                <div className='portfolio-container'>
                    <h6>Voyage Voyage</h6>
                    <img src={theMugPlug} height='250px' width='250px' alt='' ></img>
                    <p>Blog de voyage crée avec Symfony 4.2</p>
                    <div>
                    <a href="" class="button-site">Website</a>
                    <a href="" class="button-code">GitHub</a>


                    </div>
                </div>
                <div className='portfolio-container'>
                <hr></hr>
                    <h6>The Hanged Man</h6>
                    <img src={theMugPlug} height='250px' width='250px' alt='' ></img>
                    <p>Jeu du pendu  crée avec React</p>
                    <div>
                    <a href="" class="button-site">Website</a>
                    <a href="" class="button-code">GitHub</a>


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