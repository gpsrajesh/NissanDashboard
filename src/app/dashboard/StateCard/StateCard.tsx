import Ball from '@/app/components/shared/Ball/Ball'
import { PlusIcon } from '@/assets/icons/PlusIcon'
import { FC } from 'react'

import './StateCard.scss'

type StateCardProps = {
  state: 'In progress' | 'Pending with client' | 'Complete'
  items: number | string
}

const StateCard: FC<StateCardProps> = ({ state, items }) => {
  const ballTypes = {
    Complete: undefined,
    'Pending with client': 'pending' as 'pending',
    'In progress': 'error' as 'error',
  }

  return (
    <div className="state-card">
      <div className="state-card__header">
        <span className="name">{state}</span>
        <Ball state={ballTypes[state]} />
      </div>
      <div className="state-card__body">
        <span className="number">{items}</span>
        <span className="subtitle">Items</span>
      </div>
      <div className="state-card__footer">
        <span>See list</span>
        <PlusIcon />
      </div>
    </div>
  )
}

export default StateCard
