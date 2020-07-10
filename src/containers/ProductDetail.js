import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { products } from './constants';

export default function ProductDetail({ props }) {
    const [el, setEl] = useState(null)
    const [count, setCount] = useState(1);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        setEl(products.find(product => product.id === props.productId));
    }, [])


    return (
        <>{el &&
            <Modal show={true} onHide={props.handleClose} size="lg">
                <div className="modal-header d-flex align-items-center pt-2 pb-2">
                    <h5 className="modal-title">
                        {/* {props.icon} */}
                        <span className="ml-2">{el.shortDescription}</span>
                    </h5>

                    <div class="ml-auto mr-0 mb-0">
                        <button class="btn btn-outline-primary" style={{ borderRadius: '20px' }}>
                            <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                            {props.cartCount || 0}
                        </button>
                    </div>

                    <button type="button" className="close ml-0" onClick={props.handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div class="d-flex justify-content-center">
                        <img src={require('../images/' + el.image)} alt='logo' className="product-img" style={{ height: '400px' }}></img>
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
                            <h4 class="text-success d-inline">${el.sellingprice}
                            </h4>
                            <h6 class="text-secondary"><del>${el.listprice}</del></h6>
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    {added &&
                        <div class="alert alert-success" role="alert">
                            <i class="fa fa-check mr-2" aria-hidden="true"></i>
                            <strong>Product added to cart</strong>
                        </div>
                    }
                    {!added && <button className={props.confirmBtnClass || "btn btn-primary"} onClick={() => { setAdded(true); props.handleAdded(count); }}>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span className="ml-2">{props.confirmBtnText || "Add to cart"}</span>
                    </button>}
                </div>

            </Modal>}
        </>
    )
}
