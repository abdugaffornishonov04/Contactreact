import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
// import { Container } from 'react-bootstrap'

export class ToDoform extends Component {
  render() {
    const {contact, handleContact, submitForm} = this.props
    // const submitForm = (e) => {
    //   e.preventDefault()
    //   console.log(e.target.firstName.value);
    //   console.log(e.target.lastName.value);
    //   console.log(e.target.categories.value);
    //   console.log(e.target.phone.value);
    // }
    return (
      <Form noValidate onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            onChange={handleContact}
            value={contact.firstName}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            onChange={handleContact}
            value={contact.lastName}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="categories">
          <Form.Label>Categories</Form.Label>
          <Form.Select
            onChange={handleContact}
            value={contact.categories}
          >
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="others">Others</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            onChange={handleContact}
            value={contact.phone}
            required
            type="tel"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button className="w-100 p-2 add-contact-btn" type="submit">
          Add Contact
        </Button>
      </Form>
    );
  }
}

export default ToDoform;

///nni34rp4jrp43jrp43jrpi43jkrfnkjdebfkjdwfuekijfbeeiufbiu
