import CheckBox from '@/app/components/shared/CheckBox/CheckBox'
import { ChainIcon } from '@/assets/icons/ChainIcon'

import './SummaryCard.scss'

const SummaryCard = ({
  className,
  actionsList,
}: {
  className?: string
  actionsList: string[]
}) => {
  return (
    <div className={`summary ${className}`}>
      <div className="summary__header">
        <h2 className="summary__header-title">Project Summary</h2>
        <span className="summary__header-date">10th of August 2023</span>
      </div>
      <p className="summary__description">
        Hi, we have updated the status of the current projects and let us know
        if there is anything we have missed. Hope this helps and have a great
        week
      </p>
      <div className="summary__actions">
        <h3 className="title">Actions needed from you</h3>
        <ul className="list">
          {actionsList.map((action, index) => (
            <li key={index} className="list__item">
              <CheckBox />
              <span className="list__item-name">{action}</span>
              <ChainIcon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SummaryCard
