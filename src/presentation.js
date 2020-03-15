import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Presentation extends React.Component{
    render() 
        {
            return(
                <>
                <div className='presentation-container'>
                    <h1>{this.props.name}</h1>
                    <p className='title-paragraph'>{this.props.description}</p>
                </div>
                </>
                
            )
        
    }

}

// ========================================
  
ReactDOM.render(
    <Presentation />
    ,
    document.getElementById('root')
  );

  export default Presentation;