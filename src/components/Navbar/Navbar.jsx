import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item)=> (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() =>setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{duration: 0.85, ease: "easeOut"}}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://twitter.com/barmilitary" target='_blank' rel='noreferrer'>
                  Twitter <BsTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/muhammad_babalola/" target='_blank' rel='noreferrer'>
                  Instagram <BsInstagram /> 
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/babalola-muhammad-45993ab4/" target='_blank' rel='noreferrer'>
                  LinkedIn <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/movelop" target='_blank' rel='noreferrer'>
                  Github <BsGithub /> 
                </a>
              </li>
            </ul>
            
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar