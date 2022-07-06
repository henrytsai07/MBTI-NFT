import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function Error({header,error}) {
  var [show, setShow] = useState(false);

  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true); 

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={event => {
            console.log("read");
            handleClose();
        }}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}


