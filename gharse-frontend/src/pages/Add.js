import React from 'react'
import '../styles/Add.scss'

export const Add = () => {
    return (
        <div>
            <div className='add-form-container'>
                <h3>Add product</h3>
                <form>
                    <div>
                        <input type="text" placeholder='name' />
                    </div>
                    <div>
                        <input type="text" placeholder='price' />
                    </div>
                    <div>
                        <div>Description</div>
                        <textarea />
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
