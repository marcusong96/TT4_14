/* Compulsory Imports */
import React from 'react'
import { Link } from 'react-router-dom'

/* Stylesheets Imports */

/* Components Imports */
import { Container } from 'react-bootstrap';


function Footer() {
  return (
    <footer variant="dark">
      <Container className="mt-4" fluid>
        <Container className="row text-center" fluid>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h3>Getting Started</h3>
            <ul id="quick-links" className="list-unstyled">
              <li><Link to="#">API</Link></li>
              <li><Link to="#">Documentation</Link></li>
              <li><Link to="#">Installation</Link></li>
              <li><Link to="#">Required Files</Link></li>
              <li><Link to="#">Videos</Link></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h3>Help</h3>
            <ul id="quick-links" className="list-unstyled">
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Privacy</Link></li>
              <li><Link to="#">Help Centre</Link></li>
              <li><Link to="#">Media Centre</Link></li>
              <li><Link to="#">Cookies</Link></li>
              <li><Link to="#">Legal Notices</Link></li>
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">Account</Link></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h3>Investors</h3>
            <ul id="quick-links" className="list-unstyled">
              <li><Link to="#">Corporate</Link></li>
              <li><Link to="#">Retail</Link></li>
              <li><Link to="#">Account</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>
        </Container>
        <Container className="row" fluid>
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <span>
              <u><Link to="#">databaser.io</Link></u>
              <p> is a mini project, created solely for WMF Assignment 2</p>
            </span>
            <h6>© All rights Reserved. databaser.io Pte. Ltd.</h6>
          </div>
        </Container>
      </Container>

    </footer >
  )
}

export default Footer
