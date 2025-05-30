import { fetchProjects } from '@/app/lib/data'
import { Project } from '@/app/lib/definitions'
import Row from '../../Row/Row'
import ListViewWrapper from '../../Row/ListViewWrapper/ListViewWrapper'

import './ListGrid.scss'

const categories: { [key: string]: string } = {
  'In progress': 'In Progress (with EC)',
  'Waiting for input': 'Waiting for Input',
  Completed: 'Complete',
}

const ListGrid = async ({
  className,
  currentPage,
  currentSearch,
  currentFilter,
}: {
  className?: string
  currentPage: string
  currentSearch: string
  currentFilter: string
}) => {
  const projects = (await fetchProjects()) as Project[]

  const draftProjects = projects
    ?.filter((card) => card.status === categories[currentPage])
    .filter((card) =>
      card.name.toLowerCase().includes(currentSearch.toLowerCase())
    )

  const sortAZ = (projects: Project[]) => {
    projects.sort((obj1, obj2) => {
      // Compare titles alphabetically
      const nameA = obj1.name.toLowerCase()
      const nameB = obj2.name.toLowerCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })
  }
  const sortNewestFirst = (projects: Project[]) => {
    projects.sort((obj1, obj2) => {
      // Convert dates to Date objects
      const estCompletionA = new Date(
        obj1.estCompletion.split('/').reverse().join('-')
      )
      const estCompletionB = new Date(
        obj2.estCompletion.split('/').reverse().join('-')
      )
      if (estCompletionA < estCompletionB) return 1
      if (estCompletionA > estCompletionB) return -1

      const nameA = obj1.name.toLowerCase()
      const nameB = obj2.name.toLowerCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })
  }

  if (currentFilter === 'az') sortAZ(draftProjects)
  if (currentFilter === 'za') {
    sortAZ(draftProjects)
    draftProjects.reverse()
  }
  if (currentFilter === 'newest-first') sortNewestFirst(draftProjects)
  if (currentFilter === 'oldest-first') {
    sortNewestFirst(draftProjects)
    draftProjects.reverse()
  }

  return (
    <ListViewWrapper>
      <div className="listgrid-content">
        {draftProjects.length > 0 ? (
          draftProjects.map((card, index) => (
            <Row
              key={index}
              name={card.name}
              percent={card.percent}
              latestLink={card.latestLink}
              scormLink={card.scormLink}
              date={card.estCompletion}
              type={card.type}
            />
          ))
        ) : (
          <span className="no-results">
            Sorry, there's no results for <span>"{currentSearch}"</span>
          </span>
        )}
      </div>
    </ListViewWrapper>
  )
}

export default ListGrid
