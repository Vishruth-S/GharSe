import React from 'react'
import landingimg from '../assets/img/landing.png'
import '../styles/Landing.scss'

const Landing = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-6 landing-col1'>
                    <h1>
                        Healthy and Organic vegetables, delivered fresh to your home
                        .                    </h1>
                    <p>
                        Enjoy a healthy life by eating healthy and organic vegetables that are home-grown and make your life better
                    </p>
                </div>
                <div className='col-6'>
                    <img className='landing-img' src={landingimg} />
                </div>
            </div>
        </div>
    )
}

export default Landing