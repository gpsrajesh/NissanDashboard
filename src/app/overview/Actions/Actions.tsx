'use client'
import Filter from '@/app/components/shared/Filter/Filter'
import { ViewColumnIcon } from '@/assets/icons/ViewColumnIcon'
import { ViewListIcon } from '@/assets/icons/ViewListIcon'
import { useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import './Actions.scss'

const sections = ['In progress', 'Waiting for input', 'Completed']

const Actions = () => {
  const searchParams = new URLSearchParams(useSearchParams())

  const [currentPage, setCurrentPage] = useState(
    searchParams.get('category') !== null
      ? searchParams.get('category')
      : 'In progress'
  )
  const [isViewList, setIsViewList] = useState(
    searchParams.get('view') === 'list'
  )

  const pathname = usePathname()
  const { replace } = useRouter()

  const updateCategory = (name: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('category', name)
    replace(`${pathname}?${params.toString()}`)
    setCurrentPage(name)
  }

  const updateView = (name: string) => {
    const params = new URLSearchParams(searchParams)
    if (name) {
      params.set('view', name)
    } else {
      params.delete('view')
    }
    replace(`${pathname}?${params.toString()}`)
    setIsViewList(name === 'list')
  }

  return (
    <section className="actions">
      <ul className="categories">
        {sections.map((category) => (
          <li
            key={category}
            onClick={() => updateCategory(category)}
            className={currentPage === category ? 'selected' : ''}
          >
            {category}
          </li>
        ))}
      </ul>

      <section className="filters">
        <Filter />
        <div className="filters__view">
          <span className="title">View</span>

          <ViewColumnIcon
            onClick={() => updateView('cards')}
            className={isViewList ? '' : 'selected'}
          />

          <ViewListIcon
            onClick={() => updateView('list')}
            className={!isViewList ? '' : 'selected'}
          />
        </div>
      </section>
    </section>
  )
}

export default Actions
