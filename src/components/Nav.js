import React from 'react'
import Logo from '../components/images/P2PLogo.png'

export default function Nav() {
    return (
        <div>
            <nav class="navbar bg-light">
                <img className='nav-logo' src={Logo} />
                <a href='https://forms.gle/Q1pzrPiepGP4S4HeA' target='_blank' className='btn btn-danger disabled' >Tickets</a>
            </nav>
        </div>
    )
}
