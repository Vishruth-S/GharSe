import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const Card = ({ item }) => {
    console.log(item)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Placed!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order has been placed successfully. You can pay on delivery</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
            <div class="card" >
                <img class="card-img-top home-card-img-top" src={item.imageUrl} alt="Card image cap" />
                <div class="card-body">
                    <div className='row'>
                        <div className='col-6'>
                            <h5 class="card-title">{item.name}</h5>
                        </div>
                        <div className='col-6 text-end'>
                            <p class="card-text text-muted">{item.seller}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <p class="card-text">&#8377; {item.price} / kg</p>
                        </div>
                        <div className='col-6 text-end'>

                            <button class="btn home-add-btn" onClick={handleShow}>Buy now <i class="fa fa-cart-plus"></i></button>
                        </div>
                    </div>
                    <div className='text-center'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card