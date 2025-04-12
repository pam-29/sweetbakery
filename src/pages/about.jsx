import React from 'react'
import BannerImg from '../assets/banner.png'
import '../styles/about.css'

function about() {
    return (
        <div className='about'>
            <div className='aboutTop'>
                <img src={BannerImg} alt="image donut" />
            </div>

            <div className='aboutBottom'>
                <h1>A propos</h1>
                <p>Bienvenue chez Sweet Bakery, le paradis des donuts gourmands ! Passionnés de pâtisserie et amoureux des saveurs uniques, nous vous proposons une sélection artisanale de donuts moelleux et savoureux, préparés avec des ingrédients de qualité. Que vous soyez fan de chocolat fondant, de fruits acidulés ou de glaçages créatifs, notre collection saura ravir vos papilles. <br /> <br />
                Chez Sweet Bakery, chaque donut est une expérience : des recettes originales, des couleurs éclatantes et un goût inoubliable. Nous mettons un point d'honneur à allier plaisir et fraîcheur, en livrant directement chez vous des douceurs faites avec amour. <br />

                Laissez-vous tenter et commandez dès maintenant votre dose de bonheur sucré !</p>
            </div>
        </div>
    )
}

export default about
