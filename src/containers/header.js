import React, { Component } from 'react';
import './style.css';
import {
    Link
} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount :0
        }
    }

    addCartCount() {
        this.setState({
            cartCount: this.state.cartCount + 1
        });
    }


    render() {
        return (

            <div className="row header-content" style={{ marginTop: '0em' }}>
                    <div className="col-lg-4">
                        <img src={require('../images/retailIcon.png')} alt='logo' className="logo"></img>
                    </div>
                    <div className="col-lg-2" style={{ paddingTop: 20 + "px" }}>
                        <span>Home</span>
                    </div>
                    <div className="col-lg-2" style={{ paddingTop: 20 + "px" }}>
                        <span>Contacts</span>
                    </div>

                    <div className="col-lg-2" style={{ paddingTop: 20 + "px" }}>
                        <span>Sign-In</span>
                    </div>

                    <div className="col-lg-2" style={{ paddingTop: 10 + "px" }}>
                        <Link to={`/cart?productId=2`}>
                            <img src={require('../images/cart.svg')} alt="cart"/>
                            <span class="badge badge-light">{this.state.cartCount}</span>
                        </Link>
                    </div>
                </div>
            
        )
    }
}
export default Header;
