import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BuyFlowerModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      flower: props.flower
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  sendOrder(e, data){
    alert(this.state.flower);
}

  render() {    

    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>
                                        {flower.name}
                                    </ModalHeader>
                                        <ModalBody>
                                        <div>
                                        <InputGroup>
                                          <Input placeholder="Фамилия и Имя" />
                                        </InputGroup>
                                        <br/>
                                        <InputGroup>
                                          <Input placeholder="Номер телефона" />
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                          <Input placeholder="username" />
                                          <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                          <InputGroupAddon addonType="prepend">
                                            <InputGroupText>$</InputGroupText>
                                            <InputGroupText>$</InputGroupText>
                                          </InputGroupAddon>
                                          <Input placeholder="Dolla dolla billz yo!" />
                                          <InputGroupAddon addonType="append">
                                            <InputGroupText>$</InputGroupText>
                                            <InputGroupText>$</InputGroupText>
                                          </InputGroupAddon>
                                        </InputGroup>
                                        <br />
                                        <InputGroup>
                                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                          <Input placeholder="Amount" type="number" step="1" />
                                          <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                        </InputGroup>
                                        </div>   
                                        </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={((e) => this.sendOrder())}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
      </div>
    );
  }
}

export default BuyFlowerModal;