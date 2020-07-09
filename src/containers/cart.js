import React, { Component } from 'react';
import { products } from './constants'
import BackgroundImg from '../images/bg.svg';
import {
    Link
} from "react-router-dom";

export default class Cart extends Component {

    el = products.find(product => product.id == this.getQueryStringParams('productId', window.location.href))

    getQueryStringParams(params, url) {
        var href = decodeURIComponent(url);
        var regEx = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
        var value = regEx.exec(href);
        return value ? value[1] : null;
    }

    render() {
        return (
            <div className="App">
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

                    </div>
                </div>

                <div className="container-fluid" style={{ backgroundImage: "url(" + BackgroundImg + ")", backgroundRepeat: "" }} >
                    <div className="row">
                        <div className="col-lg-3">
                            <div style={{ paddingTop: '2%' }} className="product-data-main">
                                <img src={require('../images/' + this.el.image)} alt='logo' className="product-img" style={{ height: '300px' }}></img>
                            </div>
                            <br></br>
                        </div>
                        <div className="col-lg-2">
                            <div style={{ textAlign: 'left', paddingTop: '1%', width: '80%', paddingLeft: '9%' }}>
                                {this.el.shortDescription}
                                <br></br>
                                <span className="badge">Category: {this.el.Category}</span><br></br>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">-</span>
                                </div>
                                <input type="text" style={{ width: '10%', textAlign: 'justify' }} value='10'></input>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon1">+</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1">
                            <span style={{ color: "red" }} className="strikeprice">${this.el.listprice}</span> <br></br>
                            <span style={{ color: "green" }}>${this.el.sellingprice} </span>
                        </div>

                        <div className="col-lg-4 cart-subtotal">
                            <span>subtotal : $50</span> <br></br>
                            <span style={{ color: "green" }}>Shipping : free </span> <br></br>
                            <span style={{ color: "green" }}>Total : $50 </span> <br></br>
                            <Link to={`/checkout`}> <button type="button" class="btn btn-primary" style={{ marginLeft: '30%', marginBottom: '5%' }}>Proceed To Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Footer">
                    <p style={{ paddingTop: '10px' }}>&copy; thefamousretailer</p>
                </div>
            </div >

        )
    }
}