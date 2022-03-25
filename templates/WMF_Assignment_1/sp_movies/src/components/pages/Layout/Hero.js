/* Compulsory Imports */
import React from 'react'

/* Stylesheets Imports */
import '../../../styles/hero.css'

/* Components Imports */

function Hero() {
  return (
    <div id="hero_image">
      <div id="hero_container">
        <h1 className="d-none d-lg-block d-md-none d-sm-none"><span className="display-7 fs-1" id="hero_title">databaser.io</span></h1>
        <h1 className="d-none d-sm-none d-lg-none d-md-inline"><span className="display-5 fs-2" id="hero_title">databaser.io</span></h1>
        <h1 className="d-none d-md-none d-lg-none d-sm-inline"><span className="display-3 fs-3" id="hero_title">databaser.io</span></h1>
        <h1 className="d-block d-sm-none"><span className="display-1 fs-4" id="hero_title">databaser.io</span></h1>
        <span id="hero_desc">The best movie review tracker</span>
      </div>
    </div>
  )
}

export default Hero
