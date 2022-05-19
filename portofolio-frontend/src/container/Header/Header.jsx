import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { Images } from '../../constants';


const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition= {{ duration: 1 }}
        className= 'app__header-info'
      >

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>
              👋
            </span>

            <div style= {{ marginLeft: 20 }}>
                <p className='p-text'> Hello, I am  </p>
                <h1 className='head-text'> Edward </h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
          <p className='p-text'> Web developer  </p>
          <p className='p-text'> Freelancer  </p>
          </div>

        </div>

      </motion.div>

      <motion.div
        transition= {{ duration: 0.5, delayChildren: 0.5 }}
        whileInView= {{ opacity: [0, 1] }}
        className= 'app__header-img'
      >
        <img src= {Images.profile2} alt="Profile image" />

        <motion.img 
          transition= {{ duration: 1, ease: 'easeInOut'}}
          whileInView= {{ scale: [0, 1] }}
          className= 'overlay-circle'
          src= {Images.circle}
          alt = 'profile circle'
        >

        </motion.img>
      </motion.div>

      <motion.div>
        
      </motion.div>
    </div>
  )
}

export default Header