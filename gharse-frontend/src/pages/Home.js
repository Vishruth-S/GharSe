import React from 'react'
import Card from '../components/Card'
import '../styles/Home.css'

const tempData = [{
    name: "Vendakka",
    image: "https://m.media-amazon.com/images/I/61M7ZbTTlVL._SL1000_.jpg",
    price: "200",
    quantity: "0",
    seller: "vishruth",
    desc: "Lorem ipsum is just a dummy placeholder text that is used for random text"
}, {
    name: "Vendakka",
    image: "https://m.media-amazon.com/images/I/61M7ZbTTlVL._SL1000_.jpg",
    price: "200",
    seller: "hanna",
    desc: "Lorem ipsum is just a dummy placeholder text that is used for random text"
}, {
    name: "Vendakka",
    image: "https://m.media-amazon.com/images/I/61M7ZbTTlVL._SL1000_.jpg",
    price: "200",
    seller: "Lisa",
    desc: "Lorem ipsum is just a dummy placeholder text that is used for random text"
}, {
    name: "Vendakka",
    image: "https://m.media-amazon.com/images/I/61M7ZbTTlVL._SL1000_.jpg",
    price: "200",
    seller: "Fayaz",
    desc: "Lorem ipsum is just a dummy placeholder text that is used for random text"
}, {
    name: "Vendakka",
    image: "https://m.media-amazon.com/images/I/61M7ZbTTlVL._SL1000_.jpg",
    price: "200",
    seller: "Amjad",
    desc: "Lorem ipsum is just a dummy placeholder text that is used for random text"
}]


const Home = () => {
    return (
        <div>
            <div>

            </div>
            <div className='home-main'>
                <div className='row'>
                    {tempData.map((item, id) => (
                        <div className='home-col col-3' key={id}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home