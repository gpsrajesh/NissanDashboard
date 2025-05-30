import './Hamburger.scss'

const Hamburger = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <span className="hamburger__bar hamburger__bar--md" />
      <span className="hamburger__bar hamburger__bar--sm" />
      <span className="hamburger__bar" />
    </div>
  )
}

export default Hamburger
