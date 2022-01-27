import React from 'react';
import {Modal } from 'react-bootstrap';


const ModalMessage = ({show,setShow,message}) => {
    

  const handleClose = () => setShow(false);

    return (
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <p className='text-success'>{message}</p>
        </Modal.Header>
        
      </Modal>
    </>
    );
};

export default ModalMessage;