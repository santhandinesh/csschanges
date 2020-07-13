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
                <div class="alert alert-success" role="alert">
                    <strong>Your Order has been placed. Order Id is : 123456</strong>
                </div>
            </div>
        </>
    )
}
