'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Hamburger from '../../shared/Hamburger/Hamburger'
import MenuPanel from './MenuPanel/MenuPanel'

import './Menu.scss'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="menu">
      <button className="menu__button" onClick={toggleMenu}>
        <Hamburger />
        <span className="title">Menu</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              position: 'fixed',
              top: 0,
              left: 0,
              opacity: 0,
              x: '-200px',
              zIndex: 3,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-200px' }}
          >
            <MenuPanel onClick={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Menu
