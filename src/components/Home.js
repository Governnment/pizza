import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
  // visible: {
  //   scale: [1, 1.2, 1],
  //   transition: { delay: 1.5, duration: 0.4 }
  // },
  hover: {
    scale: 0.8,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.2,
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut'}
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={{containerVariants}}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;