import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from './categories/profil.js';
import Competences from './categories/competences.js';
import Experiences from './categories/experiences.js';
import Formation from './categories/formation.js';
import References from './categories/references.js';
import SavoirEtre from './categories/savoir-etre.js';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BuildIcon from '@material-ui/icons/Build';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FaceIcon from '@material-ui/icons/Face';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); 

class Menu extends React.PureComponent{
constructor(){
    super();
    this.state = {render:"profil", items:
    ['profil', 'competences', 'experiences', 'formation', 'references', 'savoir etre'],
active: false}; 
}


handleClick(compName){  

    this.setState({render:compName});
    this.setState({active:true});

}

renderComp(){
    switch(this.state.render){
        case 'profil': return <Profil />;
        case 'competences' : return <Competences />;
        case 'experiences': return <Experiences />;
        case 'formation' : return <Formation />;
        case 'references' : return <References />;
        case 'savoir etre': return <SavoirEtre />;
        default:       
    }   
}

render() 
    {

    /*    function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const animations = this.state.items.map((item, i) => {
            return  <NavLink to={item} key={i} className="nav-NavLink" onClick={this.handleClick.bind(this, item)}> {capitalizeFirstLetter(item)}  </NavLink>;
        }) */
        return(
            
            <React.Fragment>
                <Router>
                    <nav className='menu-wrapper'>
                        <ul className="nav-perso">
                        <li><NavLink to="profil" activeClassName="active" onClick={this.handleClick.bind(this, 'profil')}><PersonOutlineIcon style={{ fontSize: 15 }}/><span> BIO</span></NavLink></li>
                        <li><NavLink to="/competences" activeClassName="active" onClick={this.handleClick.bind(this, 'competences')}><BuildIcon style={{ fontSize: 15 }} /><span> COMPETENCES</span></NavLink></li>
                        <li><NavLink to="/experiences" activeClassName="active" onClick={this.handleClick.bind(this, 'experiences')}><BusinessCenterIcon style={{ fontSize: 15 }} /><span> EXPERIENCES</span></NavLink></li>
                        <li><NavLink to="/formation" activeClassName="active" onClick={this.handleClick.bind(this, 'formation')}><AccountBalanceIcon style={{ fontSize: 15 }} /><span> FORMATION</span></NavLink></li>
                        <li><NavLink to="/portfolio" activeClassName="active" onClick={this.handleClick.bind(this, 'portfolio')}><span>PORTFOLIO</span></NavLink></li>  
                        </ul>
                    </nav>
  
                    <div className='content'>
                    <ReactCSSTransitionGroup className="animateExample" transitionEnterTimeout={250} transitionLeaveTimeout={250} transitionName="example">
                        {this.renderComp()} 
                    </ReactCSSTransitionGroup>          
                    </div>
               
                             
                </Router> 

            </React.Fragment>
            
        )
   
    }

}

// ========================================
  
ReactDOM.render(
    <Menu />
    ,
    document.getElementById('root')
  );

  export default Menu;