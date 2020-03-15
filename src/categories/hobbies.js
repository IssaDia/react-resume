import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';




class Hobbies extends React.Component{


    render() 
        {
            return(
                
                <p>Hobbies</p>
                
            )       
    }

}

// ========================================
  
ReactDOM.render(
    <Hobbies />
    ,
    document.getElementById('root')
  );

  export default Hobbies;