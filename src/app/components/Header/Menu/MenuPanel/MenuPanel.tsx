import Link from 'next/link'

import { FolderIcon } from '@/icons/FolderIcon'
import { HouseIcon } from '@/icons/HouseIcon'
import { NissanIcon } from '@/icons/NissanIcon'
import { SpeedometerIcon } from '@/icons/SpeedometerIcon'
import { SuitcaseIcon } from '@/icons/SuitcaseIcon'
import Hamburger from '@/shared/Hamburger/Hamburger'
import NotificationList from '../../../shared/NotificationList/NotificationList'

import './MenuPanel.scss'

const links = [
  {
    name: 'Overview',
    href: '/overview?category=In+progress&view=cards',
    icon: HouseIcon,
  },
  { name: 'Dashboard', href: '/dashboard', icon: SpeedometerIcon },
  { name: 'Resources', href: '/resources', icon: FolderIcon },
  { name: 'New work and more', href: '/new-work', icon: SuitcaseIcon },
]

const MenuPanel = ({
  onClick,
  className,
  onAnimationEnd,
}: {
  onAnimationEnd?: () => void
  onClick: () => void
  className?: string
}) => {
  return (
    <>
      <nav
        className={`menu-panel ${className}`}
        onAnimationEnd={onAnimationEnd}
      >
        <Hamburger onClick={onClick} />
        <NissanIcon className="menu-panel__nissan-icon" />

        <section className="menu-panel__links">
          {links.map((link) => {
            const LinkIcon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClick}
                className="menu-panel__links-item"
              >
                <LinkIcon className="menu-panel__links-icon" />
                <span>{link.name}</span>
              </Link>
            )
          })}
        </section>

        <section className="menu-panel__notifications">
          <h5 className="menu-panel__notifications-title">Latest updates</h5>
          <div className="menu-panel__notifications-container">
            <NotificationList
              quantity={6}
              className="menu-panel__notifications-list"
            />
          </div>
        </section>
      </nav>
      <div className="menu-panel__overlay" onClick={onClick} />
    </>
  )
}

export default MenuPanel
