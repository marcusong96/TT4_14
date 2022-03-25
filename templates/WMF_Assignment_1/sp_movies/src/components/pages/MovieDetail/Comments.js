/* Compulsory Imports */
import React from 'react'

/* Stylesheets Imports */

/* Components Imports */
import { Container } from 'react-bootstrap';
function Comments(props) {

  return (
    <div className="mt-4 mb-4" id="moviecomments_container">
      <Container className="p-3 border border-primary">
        <h1 className="text-center">Comments</h1>
        {props.comments.map((item, index) => (
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
              <h6>{item.commentDate}</h6>
            </div>
            <span style={{
              fontWeight: "normal",
              flexBasis: "100%",
              width: "100%",
            }}>{item.commentContent}</span>
          </Container>
        ))}
      </Container>
    </div>
  )
}

export default Comments;
