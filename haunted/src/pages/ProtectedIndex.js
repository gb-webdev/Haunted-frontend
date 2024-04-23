import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

const ProtectedIndex = ({ items, currentUser}) => {

    const myItems = items.filter(item => currentUser?.id === item.user_id)

    return (
        <div className='protec-index-container'>
            <h2>My Items</h2>
            <div my-item-card>
                {myItems?.map((item, index) => {
                    return (
                        <div className='my-item-content'>
                            <h3>{item.title}</h3>
                            <img />
                            <NavLink to={`/myitems/${item.id}/edit`}>
                            <button>Edit</button>
                            </NavLink>
                            <button>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProtectedIndex