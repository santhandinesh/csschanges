import React, { useState } from 'react';

export default function ProceedToCheckout({ product, cartCount, handleClose, setStage }) {

    const [count, setCount] = useState(1);

    return (
        <>
            <div className="modal-header d-flex align-items-center pt-2 pb-2">
                <h5 className="modal-title">
                    {/* {props.icon} */}
                    <span className="ml-2">Shopping Cart</span>
                </h5>

                <div class="ml-auto mr-0 mb-0">
                    <button class="btn btn-outline-primary" style={{ borderRadius: '20px' }}>
                        <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                        {cartCount || 0}
                    </button>
                </div>

                <button type="button" className="close ml-0" onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th className="border-top-0">
                                Product
                        </th>
                            <th className="border-top-0">
                                Quantity
                        </th>
                            <th className="border-top-0">
                                Price
                        </th>
                            <th className="border-top-0">
                                Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">
                                <img src={require('../images/' + product.image)} alt='logo' className="product-img" style={{ height: '50px', width: '50px' }}></img>
                                <h6 className="d-inline ml-3 text-primary">{product.shortDescription}</h6>
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                1
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                ${product.sellingprice}
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                <button className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="">
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>

                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                <h6>Subtotal</h6>
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                <h6>${product.sellingprice}</h6>
                            </td>
                        </tr>
                        <tr>
                            <td className="">
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>

                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                <h6>Shipping</h6>
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                <h6>$0</h6>
                            </td>
                        </tr>
                        <tr>
                            <td className="">
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>

                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                <h4 className="text-success">Total</h4>
                            </td>
                            <td style={{ verticalAlign: 'middle' }}>
                                <h4 className="text-success">${product.sellingprice}</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="modal-footer">
                <button className={"btn btn-secondary"} onClick={() => { setStage(0) }}>
                    <span className="ml-2">{"Back"}</span>
                </button>
                <button className={"btn btn-primary"} onClick={() => { setStage(2) }}>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="ml-2">{"Checkout"}</span>
                </button>
            </div>
        </>
    )
}
