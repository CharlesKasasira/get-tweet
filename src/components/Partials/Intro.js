import { FaGithub } from 'react-icons/fa'
import { AiFillTwitterCircle, AiOutlineLinkedin, AiFillInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import pole from 'components/img/pole.png'
import { Link } from 'react-router-dom'
import { ImYoutube } from 'react-icons/im'

function Intro() {
  return (
      <>
        <div>
            <h1>Charles Kasasira</h1>
            <p>Fullstack web developer aiming to design and develop experiences that make people's lives simple.</p>
            <div className='all-connect'>
                <Link to={{pathname: 'https://twitter.com/kasasirac'}} target="_blank" className='connect-icons twitter'><AiFillTwitterCircle /></Link>
                <Link to={{pathname: 'https://github.com/charleskasasira'}} target="_blank" className='connect-icons github'><FaGithub /></Link>
                <Link to={{pathname: 'https://www.youtube.com/channel/UClhrdUmdjbQi9fMq3R65BVw'}} target="_blank" className='connect-icons youtube'><ImYoutube /></Link>
                
            </div>
        </div>
        <div>
            <img src={pole} alt="Charles Kasasira" id="profile-image" />
        </div>
      </>
  )
}

export default Intro