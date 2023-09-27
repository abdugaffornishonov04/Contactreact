import React, { Component } from 'react'
import { Form, InputGroup } from 'react-bootstrap';

export class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  render() {
    const { searchFunc, searchRef} = this.props;
    return (
      <div>
        <InputGroup className="my-3 h-10">
          <Form.Control onChange={searchFunc} ref={searchRef} placeholder="Search contacts..." />
          <InputGroup.Text id="basic-addon2">Sort A-Z</InputGroup.Text>
          <InputGroup.Text id="basic-addon2">Filter Category</InputGroup.Text>
        </InputGroup>
      </div>
    );
  }
}

export default Header