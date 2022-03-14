import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://twitter.com/barmilitary" target='_blank' rel='noreferrer'>
                <BsTwitter />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/muhammad_babalola/" target='_blank' rel='noreferrer'>
                <BsInstagram />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/babalola-muhammad-45993ab4/" target='_blank' rel='noreferrer'>
                <BsLinkedin />  
            </a>
        </div>
        <div>
            <a href="https://github.com/movelop" target='_blank' rel='noreferrer'>
                <BsGithub />  
            </a>
        </div>
    </div>
  )
}

export default SocialMedia