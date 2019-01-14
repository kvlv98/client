import React from 'react';
import '../css/flowers.css'
import {Link} from 'react-router-dom';

class FlowersCatalog extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            flowers: [],
            isLoading: true,
            modal: false,
        }

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:5000/flowers')
            .then(response => response.json())
            .then(data => this.setState({
                flowers: data, 
                isLoading: false
            })).catch((err)=> {
                console.log(err);
                this.setState({isLoading: true});
            })
    }

    toggle(data) {
          this.setState({
          modal: !this.state.modal,
          flower: data
        });
      }

    openBuyModal(e, data) {
        
    }

    render() {
        const {flowers, isLoading} = this.state;

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
                    {flowers.map((flower, i) =>
                        <div key={i} data-id={flower.id} class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                                <a><img class="card-img-top" src={flower.url} alt=""/></a>
                                <div class="card-body">
                                  <h5 class="card-title">
                                    {flower.name}
                                  </h5>
                                  <h5>Цвет: {flower.color}</h5>
                                  <h5>{flower.price} руб.</h5>
                                  <p class="card-text">{flower.description}</p>
                                </div>
                                <div class="card-footer">
                                   <Link to={`/flower/${flower.id}`}>
                                     <button type="button" class="btn btn-success">Оформить заказ</button> 
                                   </Link>
                                </div>
                              </div>
                                
                        </div> 
                    )}
                </div>
            </div>
        );
    }
}

export default FlowersCatalog;

/**onClick={((e) => this.openBuyModal(e, flower))} */