import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import theMugPlug from '../assets/images/theMugPlug.png';




class Portfolio extends React.Component{

    render() 
        {
            return(
                <>
               
                <div>
                    <h6>The Mug Plug</h6>
                    <img src={theMugPlug} height='250px' width='250px' ></img>
                    <p>E-commerce crée avec React et Symfony</p>
                    <div>
                        <button className='btn btn-dark'>site</button>
                        <button className='btn btn-grey'>code</button>

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