import React from 'react'

export const Add = () => {
    return (
        <div>
            <h3>Add product</h3>
            <form>
                <div>
                    <input type="text" placeholder='name' />
                </div>
                <div>
                    <input type="text" placeholder='price' />
                </div>
                <div>
                    <span>Description</span>
                    <textarea />
                </div>
            </form>
        </div>
    )
}
