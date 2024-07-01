import React from 'react'
import Logo from '../components/images/P2PLogo.png'

export default function Nav() {
    return (
        <div>
            <nav class="navbar bg-light">
                <img className='nav-logo' src={Logo} />
                <a href='https://indyfringe.org/performance/2024-fringe-maniac-manor/' target='_blank' className='btn btn-danger' >Tickets</a>
            </nav>
        </div>
    )
}
