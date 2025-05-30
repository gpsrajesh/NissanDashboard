import { Suspense } from 'react'
import CardsGrid from './CardsGrid/CardsGrid'
import CardsGridSkeleton from './CardsGrid/CardsGridSkeleton/CardsGridSkeleton'
import ListGrid from './ListGrid/ListGrid'
import ListGridSkeleton from './ListGrid/ListGridSkeleton/ListGridSkeleton'

import './ProjectsContainer.scss'

const ProjectsContainer = async ({
  currentPage = 'In progress',
  currentView = 'cards',
  currentSearch = '',
  currentFilter = 'newest-first',
}) => {
  return (
    <>
      {currentView === 'cards' && (
        <Suspense
          key={currentPage + currentView}
          fallback={<CardsGridSkeleton />}
        >
          <CardsGrid
            currentPage={currentPage}
            currentSearch={currentSearch}
            currentFilter={currentFilter}
            className="card-grid"
          />
        </Suspense>
      )}
      {currentView === 'list' && (
        <Suspense
          key={currentPage + currentView}
          fallback={<ListGridSkeleton />}
        >
          <ListGrid
            currentPage={currentPage}
            currentSearch={currentSearch}
            currentFilter={currentFilter}
          />
        </Suspense>
      )}
    </>
  )
}

export const dynamic = 'force-dynamic'

export default ProjectsContainer
