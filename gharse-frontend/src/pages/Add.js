import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Add.scss'

export const Add = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [imageUrl, setImage] = useState('')
    const [type, setType] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            price: price,
            imageUrl: imageUrl,
            type: type
        }
        axios.post('https://gharse.herokuapp.com/create', data).then(res => {
            console.log("ok");
            navigate('/')
        })
    }
    return (
        <div>
            <div className='add-form-container'>
                <h3>Add product</h3>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='image' onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div>
                        <label for="type">Food product</label>
                        <input type="radio" name="type" value="food" onChange={(e) => setType(e.target.value)} />
                        <label for="type">Agliculture product</label>
                        <input type="radio" name="type" value="agriculture" onChange={(e) => setType(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
