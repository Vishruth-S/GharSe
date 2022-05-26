import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Landing from '../components/Landing'
import '../styles/Home.scss'
import axios from "axios"

const tempData = [{
    name: "Vendakka",
    image: "https://m.media-amazon.com/images/I/61M7ZbTTlVL._SL1000_.jpg",
    price: "200",
    quantity: "0",
    seller: "vishruth",
    desc: "Lorem ipsum is just a dummy placeholder text that is used for random text"
}, {
    name: "Thakalli",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWdYZwygVIWTFtXk-dcZg_lAm_VtR-hYF6eUtIy4eyGaBp29VIhUqGRxCZRcYK8raIUg&usqp=CAU",
    price: "200",
    seller: "hanna",
    desc: "Lorem ipsum is just a dummy placeholder text that is used for random text"
}, {
    name: "Thenga",
    image: "https://www.impactgrouphr.com/wp-content/uploads/peach-vs-cocnut-culture-fb.jpg",
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
    const [data, setData] = useState([])
    const getData = async () => {
        const res = await axios.get('https://gharse.herokuapp.com/')
        setData(res.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Landing />
            <div className='home-title'>
                <h3>Featured Products</h3>
            </div>
            <div className='home-main'>
                <div className='row'>
                    {console.log(data)}
                    {data.map((item, id) => (
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