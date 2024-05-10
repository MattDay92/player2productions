import React from 'react'
import { Link } from 'react-router-dom'
import SMID1 from '../components/images/SMID-1.webp'
import SMID2 from '../components/images/SMID-2.webp'
import SMID3 from '../components/images/SMID-3.webp'
import SMID4 from '../components/images/SMID-4.webp'
import SMID5 from '../components/images/SMID-5.webp'
import SMIDBanner from '../components/images/SMID-Banner.webp'
import SMIDLogo from '../components/images/SMID-Logo.webp'
import SMIDIG from '../components/images/SMIDIGPost-Square.webp'



export default function SMID() {
    return (
        <div className="smid-main">
            <div className='return-home-btn'>
                <Link to={'/'} className='btn btn-danger'>Go Home</Link>
            </div>
            <div className='SMID-banner-div'>
                <img className='banner-img SMID-banner-img' alt="Super Mario is Dead" src={SMIDBanner} />
                <img className='SMID-mobile-banner-img' alt="Super Mario is Dead" src={SMIDLogo} />
            </div>

            <div className="show-info">
                <div className="show-text">
                    <p><em>Super Mario is Dead</em> (IndyFringe 2023) is the newest fringe
                        comedy-musical from writing team Jordan Brown, Josh Brown, and Matt Day. </p>
                    <p>Mario always had the spotlight in the Mushroom Kingdom. But when he dies, his brother Luigi must see
                        if he has what it takes to be the hero and stop Waluigi, the latest guy with the super original idea of
                        taking over the world. Many familiar faces and Easter Eggs (Yoshi Eggs?) are here for fans to recognize,
                        but this darkly comedic story puts them in places you've never seen them in before.
                        And did we mention that they sing?</p>
                </div>
                <div className="show-img-div">
                    <img className="SMID-img-1" alt="Super Mario is Dead Image" src={SMID1} />
                    <img className="SMID-img-2" alt="Super Mario is Dead Image" src={SMID2} />
                    <img className="SMID-img-3" alt="Super Mario is Dead Image" src={SMID3} />
                    <img className="SMID-img-4" alt="Super Mario is Dead Image" src={SMID4} />
                </div>
            </div>
            <div className="show-media SMID-show-media">
                <iframe className="show-video SMID-show-video" width="100%" src="https://www.youtube.com/embed/nd_R_O2FMM0?si=mSD1khGgJ4R4h8VE"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <iframe className="SMID-spotify-player" 
                    src="https://open.spotify.com/embed/album/3SmYPiq2XoilJ18dr7hlkk?utm_source=generator&theme=0" width="40%"
                    height="352" frameBorder="0" allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    )
}
