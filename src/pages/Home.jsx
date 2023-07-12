import React, { useState, useEffect } from 'react';
import welcome from '../images/welcomee.jpg';
import cerealData from '../Products/cerealsData';
import shoesData from '../Products/shoesData';
import phonesData from '../Products/phonesData';
import bagsData from '../Products/bagsData';
import laptopsData from '../Products/laptopsData';
import { useNavigate } from 'react-router-dom';

function Home() {

    //useState hooks for the products
    const [cereals, setCereals] = useState([]);    
    const [shoes, setShoes] = useState([]);    
    const [bags, setBags] = useState([]);    
    const [laptops, setLaptops] = useState([]);    
    const [phones, setPhones] = useState([]);

    //useEffect hooks for the products
    useEffect(()=>{
        setCereals(cerealData);
        setShoes(shoesData);
        setBags(bagsData);
        setLaptops(laptopsData);
        setPhones(phonesData);
    }, []);

    //handling card click event
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cart');
    }


    return ( 
        <div className='home' >
            <div className='welcome-panel' >
                <img src={ welcome } alt='welcome-img' id='welcome-image' />
                <div className='welcome-msg' >
                    <h1>Welcome to VivaLuxe Marketplace!</h1>
                    <p>Elevate Your Shopping Experience in the epitome of luxury and style in the world of online shopping.</p>
                    <a href='#cereals' id='shop-now'>Shop Now</a>
                </div>
            </div>

            <div className='search-bar'>
                <input type='text' id='search-field' placeholder='Search item...' />
                <input type='submit' id='search-btn' value='Search'/>
            </div>

            <div className='products' >

                <div className='cereals product' id='cereals'>
                    <h1>Cereals</h1>
                    <div className='card-container'>
                        {cereals.map((cereal)=>(
                            <div key={cereal.id} onClick={ handleClick } className='cereal-card card' >
                                <img src={ cereal.image } alt={ cereal.name } />
                                <h3>{ cereal.name }</h3>
                                <p className='desc' > { cereal.description } </p>
                                <p className='price'>Price: Ksh. { cereal.price } </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='shoes product' >
                    <h1>Shoes</h1>
                    <div className='card-container'>
                        {shoes.map((shoe)=>(
                            <div key={shoe.id} onClick={ handleClick } className='shoe-card card' >
                                <img src={ shoe.image } alt={ shoe.name } />
                                <h3>{ shoe.name }</h3>
                                <p className='desc'> { shoe.description } </p>
                                <p className='price' >Price: Ksh. { shoe.price } </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='smartphones product' >
                    <h1>Smartphones</h1>
                    <div className='card-container'>
                        {phones.map((phone)=>(
                            <div key={phone.id} onClick={ handleClick } className='phone-card card' >
                                <img src={ phone.image } alt={ phone.name } />
                                <h3>{ phone.name }</h3>
                                <p className='desc'> { phone.description } </p>
                                <p className='price' >Price: Ksh. { phone.price } </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='Bags product' >
                    <h1>Bags</h1>
                    <div className='card-container'>
                        {bags.map((bag)=>(
                            <div key={bag.id} onClick={ handleClick } className='bag-card card' >
                                <img src={ bag.image } alt={ bag.name } />
                                <h3>{ bag.name }</h3>
                                <p className='desc'> { bag.description } </p>
                                <p className='price' >Price: Ksh. { bag.price } </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='laptops product' >
                    <h1>Laptops</h1>
                    <div className='card-container'>
                        {laptops.map((laptop)=>(
                            <div key={laptop.id} onClick={ handleClick } className='laptop-card card' >
                                <img src={ laptop.image } alt={ laptop.name } />
                                <h3>{ laptop.name }</h3>
                                <p className='desc'> { laptop.description } </p>
                                <p className='price' >Price: Ksh. { laptop.price } </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;