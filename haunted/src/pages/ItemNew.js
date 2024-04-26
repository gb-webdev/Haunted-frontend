import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ItemNew.css'

const ItemNew = ({ createItem, currentUser }) => {

    const navigate = useNavigate()
    const [newItem, setNewItem] = useState({
        user_id: currentUser.id,
        title: '',
        price: null,
        contact: '',
        location: '',
        condition: '',
        description: '',
        image: ''
    })

    const handleChange = (e) => {
        setNewItem({...newItem, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        createItem(newItem)
        navigate('/myitems')
    }

    const handleClick = () => {
        navigate('/mydecks')
    }

    return (
        <div className='item-new-container'>
            <form>
                <h2>Add an Item</h2>
                <input id='title' name='title' placeholder='Item Name...' type='text' onChange={handleChange} value={ItemNew.title}></input>
                <input id='price' name='price' placeholder='Item Price...' type='integer' onChange={handleChange} value={ItemNew.price}></input>
                <input id='contact' name='contact' placeholder='Contact Info...' type='text' onChange={handleChange} value={ItemNew.contact}></input>
                <input id='location' name='location' placeholder='Location...' type='text' onChange={handleChange} value={ItemNew.location}></input>
                <input id='condition' name='condition' placeholder='Item Condition...' type='text' onChange={handleChange} value={ItemNew.condition}></input>
                <textarea id='description' name='description' placeholder='Item Description...' type='text' cols='30' rows='10' onChange={handleChange} value={ItemNew.description}></textarea>
                <input id='image' name='image' placeholder='Image Link...' type='text' onChange={handleChange} value={ItemNew.image}></input>
                <button className='new-item-button' onClick={handleSubmit} name='submit'>Post Item</button>
                <button className='cancel-new-button' onclick={handleClick}>Cancel</button>
            </form>
        </div>
    )
}

export default ItemNew