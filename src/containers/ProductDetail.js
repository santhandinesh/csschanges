import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddToCart from './AddToCart';
import { products } from './constants';
import OrderPlaced from './OrderPlaced';
import ProceedToCheckout from './ProceedToCheckout';

export default function ProductDetail({ props }) {
    const [product, setProduct] = useState(null)
    const [stage, setStage] = useState(0)

    useEffect(() => {
        setProduct(products.find(product => product.id === props.productId));
    }, [])

    const onAddToCart = count => {
        setStage(1);
        props.handleAdded(count);
    }

    const checkout = count => {
        setStage(2);
    }

    return (
        <>{product &&
            <Modal show={true} onHide={props.handleClose} size="lg">
                {stage === 0 && <AddToCart product={product} handleClose={props.handleClose} onAddToCart={onAddToCart} cartCount={props.cartCount}></AddToCart>}
                {stage === 1 && <ProceedToCheckout product={product} handleClose={props.handleClose} setStage={setStage} cartCount={props.cartCount}></ProceedToCheckout>}
                {stage === 2 && <OrderPlaced product={product} handleClose={props.handleClose}></OrderPlaced>}
            </Modal>}
        </>
    )
}
