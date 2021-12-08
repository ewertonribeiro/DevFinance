import {useState} from 'react'

import { Button, Modal } from 'react-bootstrap';

import {FORMIK} from './Formik'

export function TransactionModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
         +Cadastrar Novo Valor
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cadastre um Novo Valor</Modal.Title>
          </Modal.Header>
          <Modal.Body>

           <FORMIK/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
