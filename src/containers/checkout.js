import React, { Component } from 'react';
import { products } from './constants'
import BackgroundImg from '../images/bg.svg';
import {
    Link
} from "react-router-dom";

export default class Checkout extends Component {

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

                <div className="container-fluid" >
                    <div className="row" >
                        Your Order has been placed. Order Id is : 123456
                        </div>
                </div>
                <div className="Footer">
                    <p style={{ paddingTop: '10px' }}>&copy; thefamousretailer</p>
                </div>
            </div >

        )
    }
}