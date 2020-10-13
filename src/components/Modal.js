import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import Pizza from '../pizza.png'
import link from '../link-img.jpg'

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '100px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
}

const Modal = ({ showModal, setShowModal, pizza }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div className='modal' variants={modal}>
            <p>Wanna make another pizza?</p>

            <img src={Pizza} />

            <a href='tel: +43-680-5558-2559'>
              <button>Order</button>
            </a>
            <Link to='/'>
              <button onClick={() => setShowModal(false)}>Start Agian</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
