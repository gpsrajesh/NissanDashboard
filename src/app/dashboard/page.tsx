import { ChainIcon } from '@/assets/icons/ChainIcon'
import PercentageCard from './PercentageCard/PercentageCard'
import StateBar from './StateBar/StateBar'
import StateCard from './StateCard/StateCard'
import Storyboard from './Storyboard/Storyboard'
import SummaryCard from './SummaryCard/SummaryCard'
import { fetchSummary } from '../lib/data'

import './Dashboard.scss'
import { Suspense } from 'react'
import DashboardSkeleton from './DashboardSkeleton/DashboardSkeleton'
import { Summary } from '../lib/definitions'

const Dashboard = async () => {
  const summary = (await fetchSummary()) as Summary

  return (
    <div className="dashboard-layout">
      <h1>
        Latest <span>status</span>
      </h1>
      <Suspense fallback={<DashboardSkeleton />}>
        <section className="dashboard">
          <PercentageCard
            globalStatus={summary.globalStatus}
            totalComplete={summary.totalComplete}
            estCompletion={summary.dateAllCompletion}
            delay={summary.daysUntilProjectCompletion}
            className="dashboard__percentage"
          />

          <Storyboard className="dashboard__storyboard" />

          <SummaryCard
            className="dashboard__summary"
            actionsList={summary.actionsNeeded}
          />

          <div className="dashboard__bars">
            <StateBar completed={summary.screenDesign} type="Design" />
            <StateBar completed={summary.storyBoard} type="Storyboard" />
            <StateBar completed={summary.alpha} type="Alpha" />
            <StateBar
              completed={summary.gold1}
              review={summary.gold2}
              type="Gold"
            />
          </div>

          <div className="dashboard__cards">
            <StateCard state="Complete" items={summary.complete} />
            <StateCard
              state="Pending with client"
              items={summary.pendingWithClient}
            />
            <StateCard state="In progress" items={summary.inProgress} />
          </div>

          <div className="dashboard__support">
            <div className="delays">
              <dl className="delays__card">
                <dt className="title">Client delays</dt>
                <dd className="number">{summary.nextProduction}</dd>
                <dd className="days">business days</dd>
              </dl>
              <dl className="delays__card">
                <dt className="title">Production delays</dt>
                <dd className="number">{summary.nextReview}</dd>
                <dd className="days">business days</dd>
              </dl>
            </div>
            <div className="feedback">
              <span className="feedback__title">Feedback</span>
              <button className="feedback__button">
                Submit your project feedback here <ChainIcon />
              </button>
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  )
}

export default Dashboard
