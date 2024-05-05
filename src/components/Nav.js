import React from 'react'
import Logo from '../components/images/P2PLogo.png'

export default function Nav() {
    return (
        <div>
            <nav class="navbar bg-light">
                <img className='nav-logo' src={Logo} />
                <a href='https://www.indyfringe.org' className='btn btn-danger disabled' >Buy Tickets</a>
            </nav>
        </div>
    )
}
