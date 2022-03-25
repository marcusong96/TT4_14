/* Compulsory Imports */
import React from 'react'

/* Stylesheets Imports */

/* Components Imports */
import { Alert } from 'react-bootstrap';


function AlertMessage(props) {
  return (
    <>
      {
        props.isAlertShown ?
          <Alert id="top_alert" variant={props.alert.variant} onClose={() => props.setIsAlertShown(false)} dismissible>
            {props.alert.message}
          </Alert>
          : <></>
      }
    </>
  )
}

export default AlertMessage;