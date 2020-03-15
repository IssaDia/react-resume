import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import javascript from '../assets/images/javascript.png';
import php from '../assets/images/php.png';
import mysql from '../assets/images/mysql.png';
import react from '../assets/images/react.png';
import vue from '../assets/images/vue.png';
import symfony from '../assets/images/symfony.png';
import bootstrap from '../assets/images/bootstrap.png';
import wordpress from '../assets/images/wordpress.png';
import woocommerce from '../assets/images/woocommerce.png';
import magento from '../assets/images/magento.png';
import git from '../assets/images/git.png';
import scrum from '../assets/images/scrum.svg';
import toeic from '../assets/images/toeic.jpg';






class Competences extends React.Component{


    render() 
        {
            return(
                
                <>
                
                <hr></hr>
                <div>
                    <h6 className='competences-title'>Langages</h6>
                    <div className='logo-container'>
                        <img className='logo' src={javascript}></img><span>Javascript</span>
                     </div>
                     <div className='logo-container'>
                        <img className='logo' src={php}></img><span>Php</span>
                     </div>
                    <div className='logo-container'>
                        <img className='logo' src={mysql}></img><span>MySQL</span>
                    </div>
                   
                </div>
                <div>
                    <h6 className='competences-title'>Librairies</h6>
                    <div>
                        <div className='logo-container'>
                            <img className='logo' src={react}></img><span>React</span>
                        </div>
                        <div className='logo-container'>
                            <img className='logo' src={vue}></img><span>Vue</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 className='competences-title'>Framework</h6>
                    <div>
                        <div className='logo-container'>
                            <img className='logo' src={symfony}></img><span>Symfony</span>
                        </div>
                        <div className='logo-container'>
                            <img className='logo' src={bootstrap}></img><span>Bootstrap</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 className='competences-title'>CMS</h6>
                    <div>
                        <div className='logo-container'>
                            <img className='logo' src={wordpress}></img><span>Wordpress</span>
                        </div>
                        <div className='logo-container'>
                            <img className='logo' src={woocommerce}></img><span>Woocommerce</span>
                        </div>
                        <div className='logo-container'>
                            <img className='logo' src={magento}></img><span>Magento</span>
                        </div>
                        </div>
                    </div>
                <div>
                    <h6 className='competences-title'>Divers</h6>
                    <div>
                        <div className='logo-container'>
                            <img className='logo' src={git}></img><span>Git</span>
                        </div>
                        <div className='logo-container'>
                            <img className='logo' src={scrum}></img><span>Scrum</span>
                        </div>
                        <div className='logo-container'>
                            <img className='logo' src={toeic}></img><span>TOEIC</span>
                        </div>
                    </div>
                </div>
              
                </>
                
            )       
    }

}

// ========================================
  
ReactDOM.render(
    <Competences />
    ,
    document.getElementById('root')
  );

  export default Competences;