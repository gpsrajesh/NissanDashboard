import './Ball.scss'

type stateType = 'error' | 'pending'

const Ball = ({ state }: { state?: stateType }) => (
  <span className={`ball ${state ? 'ball--' + state : ''}`} />
)

export default Ball
