import Menu from './Menu/Menu'
import Notifications from './Notifications/Notifications'
import SearchBarDesktop from './SearchBarDesktop/SearchBarDesktop'

import './Header.scss'

const Header = () => {
  return (
    <header className="layout-header">
      <Menu />
      <div className="layout-header__searchbar">
        <SearchBarDesktop />
      </div>
      <Notifications className="layout-header__notifications" />
    </header>
  )
}

export default Header
