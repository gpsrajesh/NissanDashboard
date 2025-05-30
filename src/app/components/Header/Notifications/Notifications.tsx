'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { BellIcon } from '@/assets/icons/BellIcon'
import NotificationList from '../../shared/NotificationList/NotificationList'

import './Notifications.scss'

const Notifications = ({ className }: { className: string }) => {
  const [number, setNumber] = useState(0)
  const [showNotifications, setShowNotifications] = useState(false)

  const showPanelHandler = () => {
    setNumber((prevNumber) => prevNumber + 1)
    setShowNotifications(true)
  }
  const closePanelHandler = () => {
    setShowNotifications(false)
  }

  return (
    <div className={`notifications ${className}`}>
      <span className="notifications__text">Latest updates</span>

      <button className="notifications__bell" onClick={showPanelHandler}>
        <BellIcon className="notifications__bell-icon" />
        <span className="notifications__bell-pill"> {number} </span>
      </button>

      <AnimatePresence mode="wait">
        {showNotifications && (
          <>
            <motion.div
              initial={{ opacity: 0, y: '-200px' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-200px' }}
              className="notifications__list-container"
            >
              <NotificationList />
            </motion.div>
            <div
              className="notifications__overlay"
              onClick={closePanelHandler}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Notifications
