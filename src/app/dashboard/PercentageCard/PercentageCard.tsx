import Ball from '@/app/components/shared/Ball/Ball'
import CircleBar from '@/app/components/shared/CircleBar/CircleBar'

import './PercentageCard.scss'

const PercentageCard = ({
  className,
  totalComplete,
  globalStatus,
  estCompletion,
  delay,
}: {
  className?: string
  totalComplete: number
  globalStatus: string
  estCompletion: string
  delay: string
}) => {
  return (
    <div className={`percentage-card ${className}`}>
      <section className="percentage-card__text">
        <p>
          Status <span className="text--regular">{globalStatus}</span> <Ball />
        </p>
        <p>
          Est completion <span className="text--regular">{estCompletion}</span>
        </p>
        <p>
          Delays <span className="text--regular">+{delay} business days</span>
        </p>
      </section>
      <CircleBar
        className="percentage-card__bar"
        value={totalComplete}
        svgWidth={240}
        strokeWidth={28}
      />
    </div>
  )
}

export default PercentageCard
