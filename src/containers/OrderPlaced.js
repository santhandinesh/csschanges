import React, { useState } from 'react';

export default function OrderPlaced({ handleClose }) {

    const [count, setCount] = useState(1);

    return (
        <>
            <div className="modal-header d-flex align-items-center pt-2 pb-2">
                <h5 className="modal-title">
                    {/* {props.icon} */}
                    <span className="ml-2">Thank You</span>
                </h5>

                <button type="button" className="close ml-0" onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">

                <div className="d-flex justify-content-center">
                    <h5>Your order has been placed</h5>
                </div>

                <hr />

                <div className="d-flex justify-content-center border-top-1">
                    <h6 className="text-secondary">Your order number is</h6>
                </div>

                <div className="d-flex justify-content-center border-bottom-1">
                    <h3 className="text-success">123456</h3>
                </div>

                <hr />

                <div className="d-flex justify-content-center ">
                    <h6 className="text-secondary">you will receive an email confirmation shortly to <span className="text-primary">john.smith@gmail.com</span></h6>
                </div>
            </div>
        </>
    )
}
