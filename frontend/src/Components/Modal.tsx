import {useState , useContext} from 'react'

import axios from 'axios'

import {TransactionContext} from '../Context/TransactionContext'

import { Button, Form, Modal } from 'react-bootstrap';

import {useFormik} from 'formik' 



type Data =   {
  description:string,
  amount:number,
  date:string,
  type:string
}
interface Transaction{
  id:string,
  description:string,
  date:string,
  amount:number,
  type:string

}

interface errors{
  id:string,
  description:string,
  date:string,
  amount:string,
  type:string
}

const validate = ({description, amount , date , type}:Data) => {

  const errors = {}as errors;

  if (!description) {

    errors.description = 'Descrição obrigatória';

  } else if (description.length > 15) {

    errors.description = 'Must be 15 characters or less';

  }
  if (!amount) {

    errors.amount = 'É necessário adicionar um Valor';

  }
  if (!date) {

    errors.date = 'Coloque a data que foi feito!';

  }
  if(!type){

    errors.type = "Por favor adicione que tipo foi esse novo valor!!!!"
  }

return errors;

};


export function TransactionModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const{transactions , setTransactions} = useContext(TransactionContext);
    


    const formik = useFormik({
      initialValues:{
        description:'',
        amount:undefined,
        date:undefined,
        type:'',
      },

      validate,

      onSubmit: async values => {
        handleClose()
        const {description , amount , date , type} = values;
          
        await axios.post("http://localhost:3001/transactions", {
          description:description,
          amount:amount,
          date:date,
          type:type.toLowerCase(),
      })
      
      .then(()=>{

        const newTransaction :Transaction= {
          id:'1',
          description:description,
          amount:amount,
          date:date,
          type:type.toLowerCase(),
        
        }
      
        setTransactions([...transactions , newTransaction])

}
)
}
}  )


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

          <Form onSubmit={formik.handleSubmit}>

            <Form.Group className="mb-3" >
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" 
            placeholder="Descrição da operação" 
            id='description'
            name='description'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            
            />

            {formik.touched.description && formik.errors.description ?<div className='error'>{formik.errors.description}</div> :undefined}

            <Form.Text className="text-muted">
              Coloque uma descrição adequada!!!
            </Form.Text>
          </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Valor</Form.Label>
              <Form.Control 
              type="number" 
              placeholder="R$" 
              id="amount"
              name="amount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.amount}
              
              />
                {formik.touched.amount && formik.errors.amount ? <div className='error'>{formik.errors.amount}</div> : undefined}

              <Form.Text className="text-muted">
                  Addicione o Valor da Transação!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data!</Form.Label>
              <Form.Control  
              type="date"
              placeholder="25/10/2021"
              id="date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              
              />
              {formik.touched.date && formik.errors.date ? <div className='error'>{formik.errors.date}</div> : undefined}

              <Form.Text className="text-muted">
                Adicione quando foi recebida/paga!!!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Despesa/Ganho</Form.Label>
              <Form.Control
              id="type"
              name="type"
              placeholder="Coloque Ganho ou Despesa"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.type}
              
              />

              {formik.touched.type && formik.errors.type ? <div className='error'>{formik.errors.type}</div>:undefined}

            </Form.Group>
            <Button 
            variant="success"
             type="submit">
              +Cadastrar
            </Button>

            <Button 
            variant="secondary"
            onClick={handleClose}
            className='closeButton'>
              fechar
            </Button>
          </Form>


          </Modal.Body>
          
        </Modal>
      </>
    );
  }
  
