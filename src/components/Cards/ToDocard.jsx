import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";

export class ToDocard extends Component {
  render() {
    const {firstName, lastName, categories, phone, contacts, likedContacts} = this.props
    console.log(contacts.map((el) => el.liked));
    console.log(likedContacts);
    // const colors = {
    //   liked: "danger",
    //   unliked: "danger"
    // }
    return (
      <Alert
        variant="primary"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <span>
            {lastName}
            {firstName}
          </span>
          &nbsp;&nbsp;&nbsp;<b>{phone}</b>
        </div>
        <span className="badge bg-success">{categories}</span>
        <div>
          {contacts.map((el) => el.liked) ? (
            <Button className="me-3" variant="danger">
              Like
            </Button>
          ) : (
            <Button className="me-3" variant="light">
              Like
            </Button>
          )}

          <Button className="me-3" variant="primary text-white">
            Edit
          </Button>
          <Button variant="warning text-danger">Delete</Button>
        </div>
      </Alert>
    );
  }
}

export default ToDocard;
