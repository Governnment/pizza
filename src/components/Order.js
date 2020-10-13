import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Modal from './Modal'

const containerVariants = {
  hidden /*initial*/: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 3700)
  }, [setShowModal])

  const [show, setShow] = useState(false)
  const [pizzaBase, setPizza] = useState('')

  const selectPizza = (pizzaBase) => {
    setShow(true)
    setPizza(pizzaBase)
  }

  return (
    <motion.div
      className='container order'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <motion.div key={topping}>{topping}</motion.div>
        ))}
      </motion.div>
      {show && <Modal pizza={pizza} />}
    </motion.div>
  )
}

export default Order
