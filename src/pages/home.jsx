import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/banner.png'
import '../styles/home.css'

function home() {
    return (
        <div className='home' style={{backgroundImage : `url(${BannerImage})`}}>
            <div className='headerContainer'>
                <h1>Sweet Bakery</h1>
                <p>Des donuts pour tous les goûts</p>
                <Link to ='/menu'>
                    <button>COMMANDER</button>
                </Link>
            </div>
        </div>
    )
}

export default home
