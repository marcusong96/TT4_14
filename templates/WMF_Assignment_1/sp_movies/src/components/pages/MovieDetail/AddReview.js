/* Compulsory Imports */
import React, { useState } from 'react'

/* Stylesheets Imports */

/* Components Imports */
import { Container, Form, Button } from 'react-bootstrap';
function AddReview(props) {
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [validated, setValidated] = useState(false);
  // code adopted from react-bootstrap docs
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(event.currentTarget);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (reviewName === "") {
      return
    }
    if (reviewText === "") {
      return
    }
    setValidated(true);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let dateStr = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    props.setReviews([...props.reviews, {
      imageSrc: "https://via.placeholder.com/400x200",
      name: reviewName,
      reviewDate: dateStr,
      reviewContent: reviewText
    }])
  };

  return (
    <div className="mt-4 mb-4" id="addreview_container">
      <Container className="p-3 border border-danger">
        <h1 className="text-center">Add your own Review!</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name_input">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" value={reviewName} onChange={(e) => { setReviewName(e.target.value) }} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="review_input">
            <Form.Label>Reviews</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="This Movie is great!" value={reviewText} onChange={(e) => { setReviewText(e.target.value) }} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="outline-light" type="submit" size="lg">Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default AddReview
