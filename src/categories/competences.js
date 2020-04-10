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
                <div>
                    <h6 className='competences-title'>Langages</h6>
                    <div>
                        <ul className='competences-list'>
                            <li><img alt= 'logo' className='competences-logo' src={javascript}></img><span>Javascript</span></li>
                            <li><img alt= 'logo' className='competences-logo' src={php}></img><span>Php</span></li>
                            <li><img alt= 'logo' className='competences-logo' src={mysql}></img><span>Mysql</span></li>
                        </ul>
                    </div>       
                </div>
                <div>
                    <h6 className='competences-title'>Librairies</h6>
                    <div>
                        <ul className='competences-list'>
                            <li><img alt= 'logo' className='competences-logo' src={react}></img><span>React</span></li>
                        </ul>  
                    </div>
                </div>
                <div>
                    <h6 className='competences-title'>Framework</h6>
                    <div>
                        <ul className='competences-list'>
                            <li><img alt= 'logo' className='competences-logo' src={symfony}></img><span>Symfony</span></li>
                            <li><img alt= 'logo' className='competences-logo' src={bootstrap}></img><span>Bootstrap</span></li>
                            <li><img alt= 'logo' className='competences-logo' src={vue}></img><span>Vue</span></li>
                        </ul>   
                    </div>
                </div>
                <div>
                    <h6 className='competences-title'>CMS</h6>
                    <div>
                        <ul className='competences-list'>
                            <li><img alt= 'logo' className='competences-logo' src={wordpress}></img><span>Wordpress</span></li>
                            <li><img alt= 'logo' className='competences-logo' src={woocommerce}></img><span>Woocommerce</span></li>
                            <li><img alt= 'logo' className='competences-logo' src={magento}></img><span>Magento</span></li>
                    </ul>
                    </div>
                </div>
                <div>
                    <h6 className='competences-title'>Divers</h6>
                    <div>
                        <ul className='competences-list'>
                            <li><img alt= 'logo' className='competences-logo' src={git}></img><span>Git</span></li>
                            <li><img alt= 'logo' className='competences-logo' src={scrum}></img><span>Scrum</span></li>
                            <li><img alt= 'logo' className='competences-logo' src={toeic}></img><span>TOEIC (965/990)</span></li>
                         </ul>
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