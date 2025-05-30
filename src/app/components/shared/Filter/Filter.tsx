'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { FilterIcon } from '@/assets/icons/FilterIcon'

import './Filter.scss'

const filterOptions: Record<string, string> = {
  'Completion date (earliest)': 'newest-first',
  'Completion date (last)': 'oldest-first',
  'Name (A - Z)': 'az',
  'Name (Z - A)': 'za',
}

const Filter = () => {
  const searchParams = new URLSearchParams(useSearchParams())
  const pathname = usePathname()
  const { replace } = useRouter()
  const [showFilters, setShowFilters] = useState(false)
  const [filter, setFilter] = useState('')

  const showFiltersToggleHandler = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters)
  }

  const submitFilterHandler = (filter: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('filter', filter)
    replace(`${pathname}?${params.toString()}`)
    setFilter(filter)
  }

  return (
    <div className="filter" onClick={showFiltersToggleHandler}>
      <span className="filter__title">Filter</span>
      <FilterIcon className="filter__icon" />

      {showFilters && (
        <ul className="filter__dropdown">
          {Object.keys(filterOptions).map((key, index) => (
            <li
              key={index}
              data-selected={filterOptions[key] === filter}
              onClick={() => submitFilterHandler(filterOptions[key])}
            >
              {key}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Filter
