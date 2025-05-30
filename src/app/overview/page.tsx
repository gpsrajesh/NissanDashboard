import Actions from './Actions/Actions'
import Details from './Details/Details'

import './Overview.scss'
import ProjectsContainer from './ProjectsContainer/ProjectsContainer'

export const dynamic = 'force-dynamic'

function Overview({
  searchParams,
}: {
  searchParams: {
    category: string
    view: string
    search: string
    filter: string
  }
}) {
  return (
    <section className="overview">
      <Details />

      <Actions />

      <ProjectsContainer
        currentPage={searchParams.category}
        currentView={searchParams.view}
        currentSearch={searchParams.search}
        currentFilter={searchParams.filter}
      />
    </section>
  )
}
export default Overview
