import React from "react"
import "./CheckoutItem.scss"

const CheckoutItem = ({ cartItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imageUrl} alt="text" />
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="price">{cartItem.price}</span>
        <div className="remove-button">&#10005;</div>
    </div>
)

export default CheckoutItem