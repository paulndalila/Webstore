import React from 'react';
import c1 from '../images/cereals/Weetabix.png'
import b1 from '../images/bags/Leather Tote Bag.jpg'

// const Cart = ({ cartItems, removeFromCart }) => {
function Cart(){

    return (
        <div className='cart'>
            <h1>Your Cart</h1>

            {/* { cartItems.length === 0 ? (
                <p className='empty-cart' >Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className='cart-item'>
                            <h3>{ item.name }</h3>
                            <p>{ item.description }</p>
                            <p>Ksh. { item.price }</p>
                            <button onClick={() => removeFromCart(item.id)} >Remove</button>
                        </div>
                    ))}
                </div>
            ) } */}

            <div>
                <div className='cart-item'>
                    <img src={ c1 } alt="weetabix" />
                    <div className='cart-item-details'>
                        <h3>Weetabix</h3>
                        <p>Perfect nutritious cereal product for kids growth</p>
                        <p>Ksh. 645</p>
                        <button>Remove</button>
                    </div>
                </div>

                <div className='cart-item'>
                    <img src={ b1 } alt="Leather Tote Bag" />
                    <div  className='cart-item-details'>
                        <h3>Leather Tote Bag</h3>
                        <p>Spacious and stylish leather tote bag for everyday use</p>
                        <p>Ksh. 2000</p>
                        <button>Remove</button>
                    </div>
                </div>

                <div className='total-section' >
                    <h3>Total Price for items in Cart</h3>
                    <p> = Ksh. 2,645</p>
                    <button>Checkout</button>
                </div>
            </div>


        </div>
    );
}

export default Cart;