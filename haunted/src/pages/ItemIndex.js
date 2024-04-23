import React from 'react'
import { NavLink } from 'react-router-dom'


const ItemIndex = ({ items }) => {
    return (
        <div className='index-container'>
            <div className='item-card'>
                {items.map((item) => (
                    <div className='card-content' key={(item.id)}>
                        <h5 className='card-title'>{item.title}</h5>
                        <NavLink to={`/items/${item.id}`}>
                        <button>View Item</button>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemIndex