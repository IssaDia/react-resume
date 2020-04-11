import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CvImage from './assets/images/issa.jpg';


class Identity extends React.Component {
    render() {
        return (

<>
<div className="card">

<div className="card-body">
  <h2 className="card-title">À propos de moi</h2>
  <img className="card-img-top img-fluid" src={CvImage} alt="Issa"></img>
  <ul className='infos-block'>
                                <li>
                                <span>NOM</span>
                                    <p>
                                        
                                        Issa Dia
                                    </p>
                                </li>
                                <li>
                                <span>LIEU</span>
                                    <p>
                                        
                                        Lyon
                                    </p>
                                </li>
                                <li>
                                <span>TELEPHONE</span>
                                    <p>
                                        
                                        06.01.79.61.78
                                    </p>
                                </li>
                                <li>
                                <span>EMAIL</span>
                                    <p>
                                        
                                        issadiapro@gmail.com
                                    </p>
                                </li>
                                <li>
                                <span>PASSIONS</span>
                                    <p>
                                        
                                        Voyages, Ecriture, Lecture, Musculation, Boxe
                                    </p>
                                </li>
                            </ul>
  
</div>
</div>
</>
        )
    }
}

// ========================================

ReactDOM.render(
    <Identity />
    ,
    document.getElementById('root')
);

export default Identity; 