import React from 'react'

const Card = ({ item }) => {
    return (
        <div class="card" >
            <img class="card-img-top" src={item.image} alt="Card image cap" />
            <div class="card-body">
                <div className='row'>
                    <div className='col-6'>
                        <h5 class="card-title">{item.name}</h5>
                    </div>
                    <div className='col-6 text-end'>
                        <p class="card-text">{item.seller}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-7'>
                        <p class="card-text">{item.price}</p>
                    </div>
                    <div className='col-5'>

                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
                <div className='text-center'>
                </div>
            </div>
        </div>
    )
}

export default Card