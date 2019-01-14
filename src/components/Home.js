import React, {Component} from 'react';
import '../css/home.css';
import FlowersCatalog from './FlowersCatalog';

class Home extends Component {
    render(){
        return (

            <div id="catalog-pane" className="container">
                <div id="main-text" className="row  justify-content-center">
                    <h1 className="display-3">Букеты</h1>
                </div>
                <FlowersCatalog/>
            </div>
            
        )
    }
}

export default Home;
