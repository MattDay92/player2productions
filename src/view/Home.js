import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/images/P2PBanner.png'
import ShowLogo from '../components/images/ManiacManorLogo.png'
import Logo from '../components/images/P2PLogo.png'
import Jordan from '../components/images/Jordan.jpg'
import Josh from '../components/images/Josh.jpg'
import Matt from '../components/images/Matt.webp'
import SMIDLogo from '../components/images/SMID-Logo.webp'
import MMAMLogo from '../components/images/MMAM-IndyFringe-Square-01-2.webp'
import AboutPhoto from '../components/images/P2PAbout.JPG'

export default function Home() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }


    return (
        <div className='fullpage'>
            <div className='hero-image heritage'>
                <img className='home-logo' alt='Player 2 Productions Logo' src={Logo} />
                <img className='home-banner' alt='Player 2 Productions' src={Header} />
            </div>


            <div className='container'>
                <div>
                    <a></a>
                </div>
                <div className='row featured d-flex justify-content-around align-items-center'>
                    <div className='col-5 show-img-div'>
                        <img className='show-img' alt='Murders at Maniac Manor The Musical Logo' src={ShowLogo} />
                    </div>
                    <div className='col-4 featured-info text-center'>
                        <h2 className='text-white'>IndyFringe 2024</h2>
                        <h2 className='text-white'>August 15 - 25</h2>
                        <p>Player 2 Productions is proud to present the world premiere of <em>Murders at Maniac Manor The Musical</em>
                            at the 2024 IndyFringe Festival!  With music and lyrics by Matt Day and book and lyrics by Josh Brown, MaMM will
                            be performed <strong>three</strong> times over the course of the festival.

                        </p>

                    </div>
                </div>

                <div className='row about d-flex justify-content-around align-items-center'>
                    <div className='mobile-about-img-div'>
                        <img className='about-img' alt='Jordan Brown, Matt Day, Josh Brown at IndyFringe 2023' src={AboutPhoto} />
                    </div>
                    <div className='col-4 about-info text-center'>
                        <h2 className='text-white'>About Player 2 Productions</h2>
                        <p>Player 2 Productions is the musical theater child of longtime friends Josh Brown, Jordan Brown, and Matt Day.  They have written
                            and starred in multiple productions in the IndyFringe Festival over the course of the last six years.  Their work includes 2019's
                            <em>Make Me A Match</em>, 2023's <em>Super Mario is Dead</em>, and 2024's <em>Murders at Maniac Manor the Musical</em>.
                        </p>
                    </div>
                    <div className='col-5 about-img-div'>
                        <img className='about-img' alt='Murders at Maniac Manor The Musical Logo' src={AboutPhoto} />
                    </div>
                </div>

                <div className='row text-center my-5'>
                    <h2>Meet the Team</h2>
                    <div className='director-bios row col-10 d-flex justify-content-around mx-auto my-3'>
                        <div className='col-3 bio'>
                            <div className='text-center my-3'><img src={Matt} className='bioIMG' alt='Kelly Day - Director' /></div>
                            <div className='text-center bio-text'>
                                <h3>Matt Day</h3>
                                <p>Matt Day is a musical theatre composer/lyricist and professional guitarist currently based out of Indianapolis, IN.
                                    After graduating from Indiana University, he began work on composing his first musical, Paper Swords, which was an
                                    award winner at the 2020 Chicago Musical Theatre Festival. Matt’s other work includes Make Me A Match, which won
                                    the 2019 IndyFringe Audience Choice Award, Super Mario is Dead , premiering at the 2023 IndyFringe Festival,
                                    and a few other projects still in early development. His work has also been accepted to various cabarets including
                                    the Allen and Grey New Voices Concert, the Latest Draft Podcast, and the Under the Arch Incubator in St. Louis, MO.
                                    Matt has two albums available for streaming on Spotify, Apple Music, Napster, and anywhere else you want to look. </p>
                            </div>
                        </div>
                        <div className='col-3 bio'>
                            <div className='text-center my-3'><img src={Josh} className='bioIMG' alt='Johnnie Hughes - Director' /></div>
                            <div className='text-center bio-text'>
                                <h3>Josh Brown</h3>
                                <p>Josh Brown is a writer, director, and occasional actor for Player 2 Productions. In 2023, Josh wrote and starred as Toad in the best-selling
                                    Super Mario is Dead and in 2019, Josh co-wrote the Audience Choice Award-winning musical, Make Me a Match in which he played the scene-stealing
                                    Brad. Josh, his lovely wife Jordan, and just okay friend Matt were proud to have launched Player 2 Productions last year. When not doing this
                                    crazy musical stuff, ask him to show you a fun movie or board game and he will be happy to oblige. </p>
                            </div>
                        </div>
                        <div className='col-3 bio'>
                            <div className='text-center my-3'><img src={Jordan} className='bioIMG' alt='Johnnie Hughes - Director' /></div>
                            <div className='text-center bio-text'>
                                <h3>Jordan Brown</h3>
                                <p>Jordan Brown is a writer, director, and propmaster for Player 2 Productions.  In 2023, Jordan co-wrote, directed, and starred in Super Mario is Dead and in 2019, Jordan co-wrote the
                                    Audience Choice Award-winning musical, Make Me a Match in which she played Lexi. She also appeared as Liz in Paper Swords (2018).
                                    She is thrilled to have launched Player 2 Productions last year with her husband of nearly 10 years, Josh Brown, and their dear friend Matt Day.
                                    When she's not crafting props out of thrift store finds and trash, she's putting her BA in English to good use at Kaye Publicity, where she helps authors promote their books. </p>
                            </div>
                        </div>
                    </div>

                </div>

                    <div class="works-box">
                        <div class="works-IMGs">
                            <Link onClick={scrollToTop} to={'/SuperMarioIsDead'}><img className='works-IMG SMID-works-IMG' alt='Super Mario is Dead Logo' src={SMIDLogo} /></Link>
                            <Link onClick={scrollToTop} to={'/MakeMeAMatch'}><img className='works-IMG' alt='Make Me A Match Logo' src={MMAMLogo} /></Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}
