import React from 'react';
import '../css/flowers.css'

class Admin extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            orders: [],
            isLoading: true,
        }

    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:5000/orders')
            .then(response => response.json())
            .then(data => this.setState({
                orders: data, 
                isLoading: false
            })).catch((err)=> {
                console.log(err);
                this.setState({isLoading: true});
            })
    }

    render() {
        const {orders, isLoading} = this.state;

        if(isLoading) {
            return( 
            <div class="row d-flex justify-content-center">
                <div class="spinner-border" role="status">
                   <span class="sr-only">Loading...</span>
                </div>
            </div>);
        }
        
        return (
            <div>
                <div className="row">
                    {orders.map((orders, i) =>
                        <div key={i} data-id={orders.id} class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                  <h5 class="card-title">
                                    {orders.email}
                                  </h5>
                                  <h5>{orders.name}</h5>
                                  <p class="card-text">{orders.phone}</p>
                                  <p class="card-text">{orders.city}</p>
                                  <p class="card-text">{orders.address}</p>
                                </div>
                              </div>
                        </div> 
                    )}
                </div>
            </div>
        );
    }
}

export default Admin;