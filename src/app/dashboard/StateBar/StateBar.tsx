import { FC } from 'react'

import './StateBar.scss'

type StateBarProps = {
  review?: number
  completed: number
  type: 'Screen design' | 'Storyboard' | 'Alpha' | 'Gold' | 'Design'
}

const StateBar: FC<StateBarProps> = ({ review, completed, type }) => {
  return (
    <div className="bar-container">
      <div className="state-bar">
        <div className="bar" style={{ height: `${completed}%` }}>
          {completed > 20 && (
            <>
              <span className="bar__percentage">{completed}%</span>
              <span className="bar__state">Complete</span>
            </>
          )}
        </div>

        {review !== undefined && (
          <div className="bar review" style={{ height: `${review}%` }}>
            {review > 20 && (
              <>
                <span className="bar__percentage">{review}%</span>
                <span className="bar__state">In review</span>
              </>
            )}
          </div>
        )}
      </div>
      <span className="type">{type}</span>
    </div>
  )
}

export default StateBar
