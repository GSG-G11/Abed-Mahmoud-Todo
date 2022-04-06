import React, {Component} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

export class EditTodoForm extends Component {
  state = {
    show: false,
  };
  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});

  render() {
    return (
      <>
        <Button variant="warning" onClick={this.handleShow}>
          Edit
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Edit Todo</Form.Label>
                <Form.Control type="text" autoFocus />
              </Form.Group>
            </Form>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EditTodoForm;
