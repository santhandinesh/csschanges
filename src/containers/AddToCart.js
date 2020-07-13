import React, { useState } from 'react';

export default function AddToCart({ product, cartCount, handleClose, onAddToCart }) {

    const [count, setCount] = useState(1);

    return (
        <>
            <div className="modal-header d-flex align-items-center pt-2 pb-2">
                <h5 className="modal-title">
                    {/* {props.icon} */}
                    <span className="ml-2">{product.shortDescription}</span>
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
                <div class="d-flex justify-content-center">
                    <img src={require('../images/' + product.image)} alt='logo' className="product-img" style={{ height: '400px' }}></img>
                </div>
                <div class="d-flex justify-content-around mt-3">
                    <div class="text-nowrap">
                        Select Size <br></br>
                        <button type="button" class="btn btn-outline-dark mr-2">S</button>
                        <button type="button" class="btn btn-dark mr-2">M</button>
                        <button type="button" class="btn btn-outline-dark">L</button>
                    </div>
                    <div class="text-nowrap">
                        Quantity <br />
                        <div class="input-group mb-3">
                            <div class="input-group-prepend" onClick={() => setCount(count => count > 1 ? count - 1 : count)}>
                                <span class="input-group-text">-</span>
                            </div>
                            <input type="text" class="border-0" style={{ width: '40px', textAlign: 'center' }} value={count}></input>
                            <div class="input-group-append" onClick={() => setCount(count => count + 1)}>
                                <span class="input-group-text">+</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-nowrap">
                        Price <br />
                        <h4 class="text-success d-inline">${product.sellingprice}
                        </h4>
                        <h6 class="text-secondary"><del>${product.listprice}</del></h6>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <button className={"btn btn-primary"} onClick={() => { onAddToCart(count) }}>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="ml-2">{"Add to cart"}</span>
                </button>
            </div>
        </>
    )
}
