import {Formik} from  'formik'

import { useState , useEffect } from 'react';

import { Row , Form, Col, InputGroup, Button } from 'react-bootstrap';

import {object , string , number , date} from 'yup'


const schema = object().shape({
  description: string().required(),
  amount: number().required(),
  date:date().required(),
  type: string().required()
});

export function FORMIK() {

    const [transaction,setTransaction] = useState<[]>([])

    useEffect(()=>{
      console.log(transaction)
    },[transaction])
  return (
    <Formik
      validationSchema={schema}
      onSubmit={setTransaction}
      initialValues={{
        description: '',
        amount: 0,
        date: '',
        type: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">

            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                isValid={touched.amount && !errors.amount}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                
              <Form.Label>Data</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                <Form.Control
                  type="date"
                  placeholder="Data"
                  aria-describedby="inputGroupPrepend"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  isInvalid={!!errors.date}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Tipo de Transção</Form.Label>
              <Form.Control
                type="text"
                placeholder="type"
                name="type"
                value={values.type}
                onChange={handleChange}
                isInvalid={!!errors.type}
              />

              <Form.Control.Feedback type="invalid">
                {errors.type}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>

          
          <Button type="submit" variant="success">Enviar</Button>
        </Form>
      )}
    </Formik>
  );
}

