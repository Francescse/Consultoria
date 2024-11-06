import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <h2>Contacte</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Introdueix el teu nom" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Introdueix el teu email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Missatge</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Escriu el teu missatge" />
        </Form.Group>

        {/* Nous camps afegits */}
        <Form.Group controlId="formPhone">
          <Form.Label>Telèfon</Form.Label>
          <Form.Control type="tel" placeholder="Introdueix el teu telèfon" />
        </Form.Group>

        <Form.Group controlId="formCompany">
          <Form.Label>Empresa</Form.Label>
          <Form.Control type="text" placeholder="Introdueix el nom de la teva empresa" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;