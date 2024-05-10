import React from 'react'
import { Link } from 'react-router-dom'
import MMAM1 from '../components/images/MMAM-1.webp'
import MMAM2 from '../components/images/MMAM-2.webp'
import MMAM3 from '../components/images/MMAM-3.webp'
import MMAMWords from '../components/images/MMAM-Words.png'
import MMAMBanner from '../components/images/MMAM-Website-Banner.webp'
import MMAMSquare from '../components/images/MMAM-IndyFringe-Square-01-2.webp'


export default function MMAM() {
    return (
        <div className='MMAM-main'>
            <div className='return-home-btn'>
                <Link to={'/'} className='btn btn-danger'>Go Home</Link>
            </div>
            <div className="mmam-banner-div">
                <img className="mmam-banner-img" alt="Make Me a Match" src={MMAMWords} />
            </div>
            <div className="show-info">
                <div className="show-text">
                    <p><em>Make Me a Match</em>, with music and lyrics by Matt Day and a book by Jordan Brown and Josh Brown,
                        was the Audience
                        Choice Award Winner at the 2019 IndyFringe Festival</p>
                    <p>On the set of America’s favorite dating show, Make Me a Match, young intern Meredith is content with
                        her job until she discovers the true character of the beloved host, Danny Sharp. Teaming up with her
                        coworker, Lexi, they work together to bring him down once and for all. </p>
                </div>
                <div className="show-img-div">
                    <img className="show-img-1" alt="Make Me A Match Image" src={MMAM1} />
                    <img className="show-img-2" alt="Make Me A Match Image" src={MMAM2} />
                    <img className="show-img-3" alt="Make Me A Match Image" src={MMAM3} />
                </div>
            </div>
            <div className="show-media">
                <iframe className="show-video" width="100%" src="https://www.youtube.com/embed/hc_kjLdw0e0" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <iframe className="show-video" width="100%" src="https://www.youtube.com/embed/7AjRzQ_GHQE?si=KBhl03sPZ66gyS0i"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
    )
}
