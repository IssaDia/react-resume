import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route}
   from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Presentation from './presentation.js';
import Identity from './card.js';
import Menu from './menu.js';


class Wrapper extends React.PureComponent {
    render() {
      return (
        <Container>
          <Row>
            <Col sm={12}>
              <Presentation name = "ISSA DIA" description = "Développeur Web"></Presentation>
            </Col>
          </Row>
          <Row>
            <Col md ={4}>
              <Identity></Identity>
            </Col>
            <Col md ={8}>
              <Menu></Menu>
            </Col>
          </Row>
        </Container>
      )
    }
} 
  // ========================================
  
  ReactDOM.render(
    (<Router>
        <Route path="/" component={Wrapper}></Route>
    </Router>),
    document.getElementById('root')
  );
  