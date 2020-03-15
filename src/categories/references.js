import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';



class References extends React.Component{


    render() 
        {
            return(
                <>
                <h3>Références</h3>
                <div>
                    <h6>YANNICK TOCQUET</h6>
                    <p>Ido Data</p>
                    <p>Tél: 06 83 44 84 75</p>
                </div>
                <div>
                    <h6>OLIVIER PHILIPPE</h6>
                    <p>Business et Décision</p>
                    <p>Tél: 06 48 35 97 09</p>
                </div>
                <div>
                    <h6>NATHALIE CANARD</h6>
                    <p>Groupe LIP</p>
                    <p>Tél: 06 03 71 69 91</p>
                </div>
                <div>
                    <h6>HAKIM CHABANE</h6>
                    <p>Decathlon International</p>
                    <p>Tél: 07 60 05 53 67</p>
                </div>
                
                
            
                </>
                
            )       
    }

}

// ========================================
  
ReactDOM.render(
    <References />
    ,
    document.getElementById('root')
  );

  export default References;