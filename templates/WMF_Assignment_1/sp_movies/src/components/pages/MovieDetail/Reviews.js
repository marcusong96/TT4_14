/* Compulsory Imports */
import React from 'react'

/* Stylesheets Imports */

/* Components Imports */
import { Container } from 'react-bootstrap';
function Reviews(props) {

  console.log('inreviews')
  console.log(props.reviews)


  return (
    <div className="mt-4 mb-4" id="moviereviews_container">
      <Container className="p-3 border border-danger">
        <h1 className="text-center">Reviews</h1>
        {props.reviews.map((item, index) => (
          <Container className="d-flex p-3 my-3" key={index} fluid style={{
            margin: "24px 0px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end"
          }}>
            <img src={item.imageSrc} alt="placeholder" style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover"
            }} />

            <div className="ms-2" style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "16px",
              flexGrow: 1,
              marginBottom: "20px"
            }}>
              <h4 className="mb-0">{item.name}</h4>
              <h6>{item.reviewDate}</h6>
            </div>
            <span style={{
              fontWeight: "normal",
              flexBasis: "100%",
              width: "100%",
            }}>{item.reviewContent}</span>
          </Container>
        ))}
      </Container>
    </div>
  )
}

export default Reviews;
