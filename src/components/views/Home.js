import Navbar from 'components/Partials/Navbar'
import weatherapp from 'components/img/weather-app.png'
import whd from 'components/img/whd.png';
import able from 'components/img/able.png'
import ntunda from 'components/img/devshop.png'
import repl from 'components/img/repl.png'
import sem from 'components/img/sem.png'
import click from 'components/img/click.png'
import dynamic from 'components/img/dynamic.png'
import { Link } from 'react-router-dom'
import { useToggle } from 'components/context/toggle'
import { useState } from 'react'
import { Intro, SkillBadge } from '../Partials/index'
import { DiReact, DiPython, DiBootstrap, DiCss3, DiJsBadge, DiGitBranch, DiNodejsSmall } from 'react-icons/di'
import { AiFillHtml5, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { Card } from 'react-bootstrap'

function Home() {

    const { theme } = useToggle()
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => setToggleState(index)
    const getActiveClass = (index, className) => toggleState === index ? className : ""
    
    return (
        <div className={`${theme}`}>
            <Navbar />
            <div className="home">
                <div className="left-out">
                </div>

                <div className='info-column'>
                    <div style={{margin: '80px 0'}}>
                        <div className="intro">
                            <Intro /> 
                        </div>
                        <div>
                            <div style={{marginTop: '20px'}}>
                                <SkillBadge skill={'HTML5'} skillIcon={<AiFillHtml5 />} color='orange' />
                                <SkillBadge skill={'CSS3'} skillIcon={<DiCss3 />} color='dodgerblue' />
                                <SkillBadge skill={'Bootstrap'} skillIcon={<DiBootstrap />} color='indigo' />
                                <SkillBadge skill={'JavaScript'} skillIcon={<DiJsBadge />} color='gold' />
                                <SkillBadge skill={'React'} skillIcon={<DiReact />} color='indigo' />
                            </div>

                            <div>
                                <SkillBadge skill={'React-Native'} skillIcon={<DiReact />} color='indigo' />
                                <SkillBadge skill={'Node.js'} skillIcon={<DiNodejsSmall />} color='green' />
                                <SkillBadge skill={'Python'} skillIcon={<DiPython />} color='gold' />
                                <SkillBadge skill={'Git'} skillIcon={<DiGitBranch />} color='black' />
                            </div>
                        </div>
                    </div>
                    

                    <div className="projects-section">
                        
                        <ul className="tabs-list">
                            <li className={` tabs ${getActiveClass(1, "active-tab")}`} onClick={() => toggleTab(1)} >
                                <h5>Projects</h5>
                            </li>
                            <li className={`tabs ${getActiveClass(2, "active-tab")}`} onClick={() => toggleTab(2)}><h5>Work</h5></li>
                        </ul>


                        <div className={`projects content ${getActiveClass(1, "active-content")}`}>
                            <div className='cards' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={weatherapp} alt='weather app' />
                                <Card.Body>
                                    <Card.Title>Obudde</Card.Title>
                                    <Link to={{pathname: 'https://obudde.netlify.app'}} target="_blank">Live Demo </Link>
                                    <Link to={{pathname: 'https://github.com/CharlesKasasira/weatherapp'}} target="_blank">Source Code</Link>
                                </Card.Body>
                            </div>
                            <div className='cards' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ntunda} alt='weather app' />
                                <Card.Body>
                                    <Card.Title>Ntunda</Card.Title>
                                    <Link to={{pathname: 'https://ntunda.vercel.app/'}} target="_blank">Live Demo </Link>
                                    <Link to={{pathname: 'https://github.com/CharlesKasasira/shop'}} target="_blank">Source Code</Link>
                                </Card.Body>
                            </div>
                        </div>

                        <div className={`works content ${getActiveClass(2, "active-content")}`}>

                            <div className='cards' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={able} alt='Byte Of Hope' />
                                <Card.Body>
                                    <Card.Title>Ablestate Creatives</Card.Title>
                                    <p>Developer, Apprenticeship</p>
                                </Card.Body>
                            </div>

                            <div className='cards' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={whd} alt='weather app' />
                                <Card.Body>
                                    <Card.Title>WHD Technologies</Card.Title>
                                    <p>Graphics Designer, Sept 2021</p>
                                </Card.Body>
                            </div>
                        </div>

                        Checkout more on <Link to={{ pathname: "https://github.com/CharlesKasasira" }} target="_blank" className='links'>GitHub</Link>
                    </div>


                    <div>

                        <h5>hashnode</h5>
                        <div className="blogs">
                            <div className='cards' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={dynamic} alt='Byte Of Hope' />
                                <Card.Body>
                                    <Card.Title>HOW TO: Create a dynamic avatar from the user's initials pure Javascript.</Card.Title>
                                    <p>Jan 13, 2022</p>
                                    <a href='https://kasasira.hashnode.dev/how-to-create-a-dynamic-avatar-from-the-users-initials-pure-javascript' className='cta'>Read</a>
                                </Card.Body>
                            </div>

                            <div className='cards' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={click} alt='weather app' />
                                <Card.Body>
                                    <Card.Title>HOW TO: Click outside to close in Javascript</Card.Title>
                                    <p>Jan 18, 2022</p>
                                    <a className='cta' href='https://kasasira.hashnode.dev/how-to-click-outside-to-close-in-javascript'>Read</a>
                                </Card.Body>
                            </div>
                        </div>


                        <h5>Medium</h5>
                        <div className="blogs">
                            <div className='cards' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={sem} alt='Byte Of Hope' />
                                <Card.Body>
                                    <Card.Title>Semantic Versioning, what you should know.</Card.Title>
                                    <p>Sep 22, 2021</p>
                                    <a href='https://kasasira.medium.com/semantic-versioning-what-you-should-know-4beb159e9365' className='cta'>Read</a>
                                </Card.Body>
                            </div>

                            <div className='cards' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={repl} alt='weather app' />
                                <Card.Body>
                                    <Card.Title>Node REPL</Card.Title>
                                    <p>Aug 12, 2021</p>
                                    <a href='https://kasasira.medium.com/node-repl-2f9f44270e8b' className='cta'>Read</a>
                                </Card.Body>
                            </div>
                        </div>

                        <h5>Youtube</h5>
                        <div className="blogs">
                            <Card style={{ width: '20rem' }}>
                                <iframe 
                                    src="https://www.youtube.com/embed/4hNSsLKtrSU">
                                </iframe> 
                            </Card>
                            <Card style={{ width: '20rem' }}>
                                <iframe 
                                    src="https://www.youtube.com/embed/g-W52F2eDRI">
                                </iframe> 
                            </Card>
                        </div>
                    </div>

                    <div className="foot" id="footer">
                            <h3>Get In Touch</h3>
                            <Link to={{pathname: 'https://twitter.com/kasasirac'}} target="_blank"><i style={{fontSize: '2rem'}}><AiFillTwitterCircle /></i></Link>
                            <Link to={{pathname: 'https://linkedin.com/in/charleskasasira'}} target="_blank"><i style={{fontSize: '2rem'}}><AiFillLinkedin /></i></Link>
                            <hr className='copyright' />
                        <div>
                            <p className='copyright'>&copy; {(new Date()).getFullYear()} Charles Kasasira</p>
                        </div>
                    </div>
                </div>

                <div className="left-out"></div>
            </div>
        </div>
    )
}

export default Home