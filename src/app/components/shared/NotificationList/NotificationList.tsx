import { EyeIcon } from '@/assets/icons/EyeIcon'
import { NOTIFICATIONS_LIST as notifications } from '@/db/mockedData'

import './NotificationList.scss'

const NotificationList = ({ quantity = 30, className = '' }) => {
  return (
    <ul className={`notification-list ${className}`}>
      {notifications.slice(0, quantity).map((notification) => (
        <li className="notification-list__item" key={notification.id}>
          <EyeIcon className="notification-list__item-icon" />
          <span className="notification-list__item-text">
            {notification.description}
          </span>
          <span className="notification-list__item-date">
            {notification.date}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default NotificationList
