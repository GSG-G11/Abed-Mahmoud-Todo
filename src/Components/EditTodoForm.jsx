import React, {Component} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';


export class EditTodoForm extends Component {
  state = {
    show: false,
    input:this.props.text,
  };
  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});
  
  render() {
    const {editTodo,id} = this.props;
    return (
      <>editTodo
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
                <Form.Control onChange={(e)=> this.setState({
                  input: e.target.value,
                })} value={this.state.input} type="text" autoFocus />
              </Form.Group>
            </Form>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button onClick={() => {
                editTodo(id,this.state.input) 
                this.handleClose()
              }}  variant="primary">Save Changes</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EditTodoForm;
