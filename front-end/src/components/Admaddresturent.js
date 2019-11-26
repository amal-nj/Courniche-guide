import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Admaddresturent extends Component {
    render() {
        return (
            <div>
                <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Resturent Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Type</Form.Label>
      <Form.Control type="password" placeholder="Resturent Type" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Location</Form.Label>
    <Form.Control placeholder="Location" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="Description" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Phone</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Type</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

