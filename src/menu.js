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
import Portfolio from './categories/portfolio.js';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BuildIcon from '@material-ui/icons/Build';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); 
class Menu extends React.PureComponent{

constructor(){
    super();
    this.state = {render:"profil", items:
    ['profil', 'competences', 'experiences', 'formation', 'references', 'portfolio'],
isActive: true}; 
}

handleClick(compName){  
    this.setState({render:compName});
    this.setState({isActive:''});
}

renderComp(){
    switch(this.state.render){
        case 'profil': return <Profil />;
        case 'competences' : return <Competences />;
        case 'experiences': return <Experiences />;
        case 'formation' : return <Formation />;
        case 'references' : return <References />;
        case 'portfolio': return <Portfolio />;
        default:       
    }   
}

render() 
    {
        return(
            
            <React.Fragment>
                <Router>
                    <Row>
                        <Col>
                            <nav className='menu-wrapper'>
                                <div className='nav-perso'>
                                <NavLink className= {'nav-perso-link' + ( this.state.isActive ? ' active' : '')}    to="profil" onClick={this.handleClick.bind(this, 'profil')}><PersonOutlineIcon style={{ fontSize: 15 }}/><span> BIO</span></NavLink>
                                <NavLink className='nav-perso-link'  to="/competences"  onClick={this.handleClick.bind(this, 'competences')}><BuildIcon style={{ fontSize: 15 }} /><span> COMPETENCES</span></NavLink>
                                <NavLink className='nav-perso-link' to="/experiences" onClick={this.handleClick.bind(this, 'experiences')}><BusinessCenterIcon style={{ fontSize: 15 }} /><span> EXPERIENCES</span></NavLink>
                                <NavLink className='nav-perso-link' to="/formation"  onClick={this.handleClick.bind(this, 'formation')}><AccountBalanceIcon style={{ fontSize: 15 }} /><span> FORMATION</span></NavLink>
                                <NavLink className='nav-perso-link' to="/portfolio"  onClick={this.handleClick.bind(this, 'portfolio')}><span>PORTFOLIO</span></NavLink>  
                                </div>   
                            </nav>
                        </Col>
                        
                    </Row>
                    
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