import React, { Component } from 'react';
import './style.css'
import { products } from './constants'
import BackgroundImg from '../images/bg.svg';
import {
    Link
} from "react-router-dom";

export default class Pdp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0
        }
    }

    addCartCount() {
        this.setState({
            cartCount: this.state.cartCount + 1
        });
    }

    el = products.find(product => product.id == this.getQueryStringParams('productId', window.location.href))

    getQueryStringParams(params, url) {
        var href = decodeURIComponent(url);
        var regEx = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
        var value = regEx.exec(href);
        return value ? value[1] : null;
    }

    closeDialog = () => {
        localStorage.setItem("closePopup", true);
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
                        <Link to={`/cart?productId=` + this.el.id}>
                            <img src={require('../images/cart.svg')} alt="cart" />
                            <span class="badge badge-light">{this.state.cartCount}</span>
                        </Link>
                    </div>
                </div>


                <div className="container-fluid" style={{ backgroundImage: "url(" + BackgroundImg + ")", backgroundRepeat: "" }} >
                    <div className="row" style={{ paddingLeft: '3%', paddingTop: '1%' }}>
                        ../{this.el.Category}/{this.el.shortDescription}
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div style={{ textAlign: 'left', paddingTop: '1%', width: '80%', paddingLeft: '9%' }}>
                                {this.el.shortDescription}
                            </div>
                            <div style={{ paddingTop: '2%' }} className="product-data-main">
                                <img src={require('../images/' + this.el.image)} alt='logo' className="product-img" style={{ height: '450px' }}></img>
                            </div>
                            <br></br>
                        </div>
                        <div className="col-lg-5">
                            <div className="product-data-sub">
                                <div style={{ paddingLeft: '5%' }}>
                                    <br></br>
                                    <span style={{ color: "red" }} className="strikeprice">Actual Price: ${this.el.listprice}</span> <br></br>
                                    <span style={{ color: "green" }}>Selling Price: ${this.el.sellingprice} - (Savings : ${this.el.listprice - this.el.sellingprice})</span>
                                </div>
                                <div style={{ padding: '5%' }}>
                                <span class="category-name">{this.el.Category}</span>
                                <br></br>
                                    <br></br>
                                    Sizes
                                    <button type="button" class="btn btn-success" style={{ margin: '1%' }}>S</button>
                                    <button type="button" class="btn btn-success" style={{ margin: '1%' }}>M</button>
                                    <button type="button" class="btn btn-success" style={{ margin: '1%' }}>L</button>
                                </div>
                                <div style={{ padding: '5%' }}>
                                    Quantity<br></br>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">1</span>
                                        </div>
                                        <input type="text" style={{ width: '10%', textAlign: 'justify' }} value='10'></input>
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon1">+</span>
                                        </div>

                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary" onClick={() => this.addCartCount()} style={{ marginLeft: '30%', marginBottom: '5%' }}>Add To Cart</button>
                            </div>
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