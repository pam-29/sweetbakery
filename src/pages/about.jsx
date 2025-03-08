import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/about.css'

function about() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className='aboutBottom'>
                <h1>A propos</h1>
                <p>Chez Pedro Pizzeria, nous mettons un point d'honneur à offrir une expérience culinaire unique, en alliant tradition et créativité. Nos pizzas sont préparées avec des ingrédients frais, locaux et de qualité supérieure, pour garantir des saveurs authentiques et inoubliables. Que vous soyez un amateur de pizza classique ou un aventurier des saveurs, notre menu varié saura satisfaire toutes vos envies. Nous croyons en la passion du fait maison et en l'art de la pizza, et c'est avec un immense plaisir que nous vous accueillons dans notre univers gourmand. Laissez-vous tenter par nos créations et découvrez un véritable voyage culinaire à chaque bouchée !</p>
            </div>
        </div>
    )
}

export default about
