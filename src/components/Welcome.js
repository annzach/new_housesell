import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import '../css/style.css'

export default class Welcome extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <Jumbotron>
            <h2 className="text-center">Find your way home</h2>
            <img id='mainPic' src="http://www.tessituraguenzani.com/images/house-design-interior-and-exterior-two-story-traditional-house-plans.jpg" alt="bear"/>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
