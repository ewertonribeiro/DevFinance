import axios from 'axios'

import {useContext , useState} from 'react'

import {TransactionContext} from '../Context/TransactionContext'

import {Format} from '../services/functions/Format'

import { Button, Modal } from 'react-bootstrap'

interface TRANSACTIONSPROPS{
    description:string,
    amount:number,
    date:string,
    id:string
}

interface Transaction{
    id:string,
    description:string,
    date:string,
    amount:number,
    type:string
  
  }


export function Transactions({description , amount , date , id}:TRANSACTIONSPROPS){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const {transactions , setTransactions} = useContext(TransactionContext)

    async function DeleteTransaction(id:string){

        const url = `http://localhost:3001/transactions/${id}`

        await axios.delete(url)

        const newTransaction :Transaction= {
            id:'1',
            description:description,
            amount:amount,
            date:date,
            type:'Ganho',
          
          }
        
          setTransactions([...transactions , newTransaction])
          handleClose()

    }
    const Amount = Format.currency(amount)

   const Date = Format.Date(date)
 

    return (
        <>
        <tr className='hover'>
        <td >{description}</td>
        <td>{Amount}</td>
        <td>{Date}</td>
        <td >
         <svg
          id={id}
        onClick={handleShow}
        xmlns="http://www.w3.org/2000/svg" 
        width="16" height="16" 
        fill="currentColor"
         className="bi bi-x-circle " 
        viewBox="0 0 16 16">
        <path
        id={id}
        onClick={handleShow}
         d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
         </svg>
         </td>
        </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-danger">
          <Modal.Title>Tem Certeza?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirme para apagar este registro!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={()=>DeleteTransaction(id)}>
            Apagar
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}