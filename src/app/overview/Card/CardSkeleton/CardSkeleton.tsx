import './CardSkeleton.scss'

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="header">
        <span className="header__bar" />
      </div>
      <div className="content">
        <span>.</span>
        <span />
        <span />
      </div>
    </div>
  )
}

export default CardSkeleton
