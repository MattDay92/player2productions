import React from 'react'
import { Link } from 'react-router-dom'
import ManiacManorLogo from '../components/images/ManiacManorLogo.png'
import ManiacManor1 from '../components/images/ManiacManor1.jpg'
import ManiacManor2 from '../components/images/ManiacManor2.jpg'
import ManiacManor3 from '../components/images/ManiacManor3.jpg'
import ManiacManor4 from '../components/images/ManiacManor4.jpg'
import MMAMWords from '../components/images/MMAM-Words.png'

export default function ManiacManor() {
    return (
        <div className='maniacmanor-main'>
            <div className='return-home-btn'>
                <Link to={'/'} className='btn btn-danger'>Go Home</Link>
            </div>
            <div className="maniacmanor-banner-div">
                <img className="maniacmanor-banner-img" alt="Make Me a Match" src={ManiacManorLogo} />
            </div>
            <div className="show-info">
                <div className="show-text">
                    <p><em>Murders at Maniac Manor: The Musical</em>, with music and lyrics by Matt Day and book and lyrics by Jordan Brown and Josh Brown,
                        was a Top 3 Selling Show at the 2024 IndyFringe Festival.</p>
                    <p>All the Maniac wanted was to hang out with the popular kids.  So, he killed them with a plan to bring their spirits back to be with him forever.  But before he could finish his grand plans, the townspeople burnt him alive.</p>
                        <p>Twenty-five years later, a group of teenagers find themselves at the site of a heinous murder spree.   Connor (a jock), Isabella (a cheerleader), Simon (a nerd), Darcy (a goth loner), and Mandy (a shy outcast) decide to do a Seance after finding an old pentagram on the floor.  Little do they know, they've brought the infamous Maniac back from Hell.
                    </p>
                </div>
                <div className="show-img-div">
                    <img className="show-img-1" alt="Make Me A Match Image 1" src={ManiacManor4} />
                    <img className="show-img-2" alt="Make Me A Match Image 2" src={ManiacManor2} />
                    <img className="show-img-3" alt="Make Me A Match Image 3" src={ManiacManor3} />
                </div>
            </div>
            <div className="show-media">
                <iframe className="show-video" width="100%" src="https://www.youtube.com/embed/aB12EFWRDNQ?si=uWK2wfB12cgP2aTS" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <iframe className="show-video" width="100%" src="https://www.youtube.com/embed/Noe9KX6eE0w?si=15yCPf1g8v5b62V2"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
    )
}
