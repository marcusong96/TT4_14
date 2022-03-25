/* Compulsory Imports */
import React from 'react'

/* Stylesheets Imports */

/* Components Imports */
import { Container } from 'react-bootstrap';
function About() {
  return (
    <div className="mt-4 mb-4" id="about_container">
      <Container className="p-3 border border-white text-center" >
        <h1>This is the About page</h1>
        <h3>Here are some instructions to get started!</h3>
        <ul className="list-unstyled">
          <li><p>You can select movies from the home page and add them to your favourites.</p></li>
          <li><p>The favourites list appears at the bottom.</p></li>
          <li><p>You can remove favourites too!</p></li>
          <li><p>There is also a favourites page where you will be able to filter your favourites by genres!</p></li>
          <li><p>Clicking on the movie card will bring you to the movie details page.</p></li>
          <li><p>Of course, you'd be able to add your own comments and reviews!</p></li>
        </ul>
      </Container>
    </div>
  )
}

export default About;
