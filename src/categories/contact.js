import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';



class Contact extends React.Component{

    render() 
        {
            return(
                
                <p>Contact</p>
                
            )       
    }

}

// ========================================
  
ReactDOM.render(
    <Contact />
    ,
    document.getElementById('root')
  );

  export default Contact;