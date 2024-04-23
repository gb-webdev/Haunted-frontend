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
                <input></input>
            </form>
        </div>
    )
}