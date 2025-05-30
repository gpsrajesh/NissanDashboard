import Ball from '@/app/components/shared/Ball/Ball'
import './Details.scss'
import { fetchSummary } from '@/app/lib/data'
import { Summary } from '@/app/lib/definitions'

const Details = async () => {
  const summary = (await fetchSummary()) as Summary
  return (
    <section className="details">
      <h1 className="details__title">
        Nissan <span className="details__title--regular">Project Portal</span>
      </h1>
      <h6 className="details__subtitle">
        <span>{summary.totalComplete}% percent</span>
        <span className="details__subtitle--regular">complete</span>
      </h6>
      <h6 className="details__subtitle">
        <span>Est Completion</span>
        <span className="details__subtitle--regular">
          {summary.dateAllCompletion}
        </span>
      </h6>
      <h6 className="details__subtitle">
        <span>Status</span>
        <span className="details__subtitle--regular">
          {summary.globalStatus}
        </span>
        <Ball />
      </h6>
    </section>
  )
}

export default Details
