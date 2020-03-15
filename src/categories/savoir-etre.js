import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';




class SavoirEtre extends React.Component{

    render() 
        {
            return(
                <>
                <h3>Savoir être</h3>
                <ul>
                    <li>
                        <span>Goût du challenge</span>
                    </li>
                    <li>
                        <span>Rigueur</span>
                    </li>
                    <li>
                        <span>Sincérité</span>  
                    </li>
                    <li>
                        <span>Implication</span>    
                    </li>
                    <li>
                        <span>Autonomie</span>
                    </li>
                    <li>
                        <span>Curiosité</span>  
                    </li>

                </ul>
                </>
                
            )       
    }

}

// ========================================
  
ReactDOM.render(
    <SavoirEtre />
    ,
    document.getElementById('root')
  );

  export default SavoirEtre;