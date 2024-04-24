import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const itemEdit = ({ updateItem, currentUser, items }) => {

    const navigate = useNavigate()
    let { item_id } = useParams()

    const currentItem = items?.find(item => item.id === +item_id)

    const [editItem, setEditItem] = useState({
        user_id: currentUser.id,
        title: currentItem.title,
        price: currentItem.price,
        contact: currentItem.contact,
        location: currentItem.location,
        condition: currentItem.condition,
        description: currentItem.description,
        image: currentItem.image
    })

    const handleChange = (e) => {
        setEditItem({ ...editItem, [e.target.name]: e.target.value})
    }

    consthandleSubmit = () => {
        updateItem(editItem, currentItem.id)
        navigate('/myitems')
    }

    return (
        <div edit-container>
            <h2>Edit Item</h2>
            <form>
                <h5></h5>
                <input type='text' name='title' value={editItem.title} onChange={handleChange} />
                <input type='number' name='price' value={editItem.price} onChange={handleChange} />
                <input type='text' name='contact' value={editItem.contact} onChange={handleChange} />
                <input type='text' name='location' value={editItem.location} onChange={handleChange} />
                <input type='text' name='condition' value={editItem.condition} onChange={handleChange} />
                <input type='text' name='descriiption' value={editItem.description} onChange={handleChange} />
                <input type='text' name='image' value={editItem.image} onChange={handleChange} />
            </form>
        </div>
    )
}