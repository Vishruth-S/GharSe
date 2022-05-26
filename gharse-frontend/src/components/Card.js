import React from 'react'

const Card = ({ item }) => {
    return (
        <div class="card" >
            <img class="card-img-top home-card-img-top" src={item.image} alt="Card image cap" />
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

                        <a href="#" class="btn home-add-btn">Add to cart <i class="fa fa-cart-plus"></i></a>
                    </div>
                </div>
                <div className='text-center'>
                </div>
            </div>
        </div>
    )
}

export default Card