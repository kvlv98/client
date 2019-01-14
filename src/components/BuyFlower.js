import React from 'react';
import '../css/flowers.css'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class BuyFlower extends React.Component {

    state = {
        flowerInfo: null,
        isLoading: true,
        email: '',
        name: '',
        phone: '',
        city: '',
        address: ''
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://localhost:5000/flower/${id}`)
            .then(response => response.json())
            .then(flowerInfo => {
                this.setState({
                    flowerInfo: flowerInfo,
                    isLoading: false
                })
            }).catch(err=> {
                console.log(err);
                this.setState({isLoading: true});
            })
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onPhoneChage = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    onCityChange = (e) => {
        this.setState({
            city: e.target.value
        });
    }

    onAddressChange = (e) => {
        this.setState({
            address: e.target.value
        });
    }

    onAddOrder = e => {
        const id = this.props.match.params.id;

        fetch(`http://localhost:5000/order/${id}`, {
            method: 'POST',
            body:JSON.stringify({
                email: this.state.email,
                name: this.state.name,
                phone: this.state.phone,
                city: this.state.city,
                address: this.state.address
        }),headers:{'content-type': 'application/json'}})
        .catch((err)=> {
            console.log(err);
            this.setState({isLoading: true});
        })
        
        window.history.replaceState(null, null, "/");
    }

    render() {
        const {isLoading, flowerInfo} = this.state;

        if(isLoading) {
            return( 
            <div class="row d-flex justify-content-center">
                <div class="spinner-border" role="status">
                   <span class="sr-only">Loading...</span>
                </div>
            </div>);
        }

        return (
        <div className="container" id="orderForm">
            <Form onSubmit={this.onAddOrder}>
                Купить {flowerInfo.name.toLowerCase()}
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" onChange={this.onEmailChange} value={this.state.email} name="email" id="exampleEmail" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Фио</Label>
                            <Input onChange={this.onNameChange} value={this.state.name} name="password" id="examplePassword"/>
                        </FormGroup>
                    </Col>
               </Row>
               <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleCity">Телефон</Label>
                        <Input type="phone" onChange={this.onPhoneChage} value={this.state.phone} name="city" id="exampleCity"/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleState">Город</Label>
                        <Input type="text" onChange={this.onCityChange} value={this.state.city} name="state" id="exampleState"/>
                      </FormGroup>
                    </Col>
               </Row>
               <FormGroup>
                    <Label for="exampleAddress">Адрес доставки</Label>
                    <Input type="text" onChange={this.onAddressChange} value={this.state.address} name="address" id="exampleAddress"/>
               </FormGroup>
               <Button className='btn btn-success' type="submite">Отправить</Button>
             </Form>
        </div>)
    }

}

export default BuyFlower;