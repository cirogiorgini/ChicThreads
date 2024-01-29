import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from '../firebase/config';
import Swal from 'sweetalert2';



const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { cart, precioTotal, emptycart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
      const pedido = {
          cliente: data,
          productos: cart,
          total: precioTotal()
      };
  
      console.log(pedido);
  
      const pedidosRef = collection(db, "pedidos");
    
      Swal.fire({
          title: "¡Pedido enviado!",
          text: "El formulario se ha enviado correctamente.",
          icon: "success",
      });

      addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                emptycart();
            })

  };
    


  return (
    <Form className='p-5' onSubmit={handleSubmit(comprar)} >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label >
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            {...register("nombre")}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            {...register("apellido")}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Correo electronico</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Correo electronico"
              {...register("correo@")}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un correo electronico.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" {...register("ciudad")} required />
          <Form.Control.Feedback type="invalid">
            elige una ciudad valida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Pais</Form.Label>
          <Form.Control type="text" placeholder="Pais" {...register("pais")} required />
          <Form.Control.Feedback type="invalid">
            Ingrese un pais valido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Codigo postal</Form.Label>
          <Form.Control type="number" placeholder="Codigo postal" {...register("Codigo postal")} required />
          <Form.Control.Feedback type="invalid">
            Ingrese un codigo postal valido.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Aceptar los terminos y condiciones"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Enviar pedido</Button>
    </Form>
  )
}

export default Checkout