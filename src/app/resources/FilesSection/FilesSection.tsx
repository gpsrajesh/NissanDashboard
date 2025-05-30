'use client'
import { FC, SVGProps, useState } from 'react'

import Filter from '@/app/components/shared/Filter/Filter'
import { ChainIcon } from '@/assets/icons/ChainIcon'
import { FileIcon } from '@/assets/icons/FileIcon'
import { ViewColumnIcon } from '@/assets/icons/ViewColumnIcon'
import { ViewListIcon } from '@/assets/icons/ViewListIcon'
import { RESOURCES } from '@/db/mockedData'
import { formatDate } from '../../../utils/formatDate'

import './FilesSection.scss'

type SourceCategory = 'File' | 'Scorm' | 'Tutorial'

type CategoryObject = {
  type: SourceCategory
  name: 'Files' | 'Scorms' | 'Tutorials and help'
  icon: FC<SVGProps<SVGSVGElement>>
}

const categories: CategoryObject[] = [
  { type: 'File', name: 'Files', icon: FileIcon },
  { type: 'Scorm', name: 'Scorms', icon: ChainIcon },
  { type: 'Tutorial', name: 'Tutorials and help', icon: ChainIcon },
]

const FilesSection = () => {
  const [category, setCategory] = useState<SourceCategory>('File')
  const [isViewList, setIsViewList] = useState(true)

  const draftResources = RESOURCES.filter(
    (resource) => resource.type === category
  )

  return (
    <div className="files-section">
      <header className="files-section__header">
        <ul className="categories">
          {categories.map((categoryItem, index) => {
            const name = categoryItem.name
            const type = categoryItem.type
            return (
              <li
                key={index}
                onClick={() => setCategory(type)}
                className={`categories__item 
                  ${category === type ? 'selected' : ''}`}
              >
                {name}
              </li>
            )
          })}
        </ul>

        <div className="actions">
          <Filter />
          <div className="actions__view">
            <span>View</span>
            <ViewColumnIcon
              onClick={() => setIsViewList(false)}
              className={`icon ${isViewList ? '' : 'selected'}`}
            />
            <ViewListIcon
              onClick={() => setIsViewList(true)}
              className={`icon ${!isViewList ? '' : 'selected'}`}
            />
          </div>
        </div>
      </header>

      <section className="files-section__content">
        <div className="titles">
          <strong> Client supplied content</strong>
          <strong> Uploaded date</strong>
        </div>

        <div className="container">
          <ul className="file-list">
            {draftResources.map((resource, index) => {
              const { type, name, date } = resource
              const SourceIcon = categories.find(
                (category) => category.type === type
              )!.icon
              return (
                <li key={index} className="file-list__file">
                  <span className="file-list__file-name">
                    <SourceIcon className="file-list__file-icon" />
                    {name}
                  </span>
                  <time>{formatDate(date)}</time>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default FilesSection
