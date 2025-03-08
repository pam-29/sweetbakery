import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/home.css'

function home() {
    return (
        <div className='home' style={{backgroundImage : `url(${BannerImage})`}}>
            <div className='headerContainer'>
                <h1>Pedro Pizzeria</h1>
                <p>Des pizzas pour tous les goûts</p>
                <Link to ='/menu'>
                    <button>COMMANDER</button>
                </Link>
            </div>
        </div>
    )
}

export default home
