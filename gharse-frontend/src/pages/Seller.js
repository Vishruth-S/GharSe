import React from 'react'
import '../styles/Seller.scss'
import profile from '../assets/img/profile.png'

const Seller = () => {
    return (
        <div className='container'>
            <div className='row seller-row'>
                <div className='col-4'>
                    <img src={profile} />
                    <h2>John Smith</h2>
                </div>
                <div className='col-8'>
                    <h3>Products sold by John Smith</h3>
                </div>
            </div>
        </div>
    )
}

export default Seller