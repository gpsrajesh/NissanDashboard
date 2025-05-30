import Link from 'next/link'
import React, { FC } from 'react'

import Ball from '@/app/components/shared/Ball/Ball'
import { ChainIcon } from '@/assets/icons/ChainIcon'
import { CheckIcon } from '@/assets/icons/CheckIcon'

import './Card.scss'

const stateRender: { [key: string]: React.ReactNode } = {
  'In Progress (with EC)': (
    <div className="state">
      <span>On track</span>
      <Ball />
    </div>
  ),
  'Waiting for Input': (
    <div className="state">
      <span>Pending input</span>
      <Ball state="pending" />
    </div>
  ),
  Complete: (
    <div className="state">
      <span>Complete</span>
      <CheckIcon className="icon" />
    </div>
  ),
}

// name	type	status	estCompletion	latestLink	screenDesigns	storyboard	alpha	beta	gold	latestUpdate

type CardProps = {
  name: string
  status: string
  type: string
  imageUrl: string
  percent: number
  estCompletion: string
  latestUpdate: string
  latestLink: string
  scormLink: string
}

const Card: FC<CardProps> = ({
  name,
  status,
  type,
  imageUrl,
  percent,
  estCompletion,
  latestUpdate,
  latestLink,
  scormLink,
}) => {
  return (
    <div className="card">
      <header className="header">
        {/* <Image
          src={imageUrl}
          width={430}
          height={260}
          alt="car"
          className="header__image"
        /> */}
        <img src={imageUrl} alt="car" className="header__image" />

        <dl className="header__text">
          <div className="header__text-top">
            <dt className="badge">{name}</dt>
            <dt className="state">{stateRender[status]}</dt>
          </div>

          <dd className="header__subtitle">{type}</dd>
        </dl>

        <div className="header__bar">
          <div
            className="header__bar-percent"
            style={{ width: `${percent}%` }}
          />
        </div>
      </header>

      <dl className="content">
        <div className="content__header">
          <div>
            <dt className="content__header-project">Project complete</dt>
            <dd className="content__header-percent">{percent}% percent</dd>
          </div>

          <div>
            <dt className="content__header-estate">Est completion</dt>
            <dd className="content__header-date">{estCompletion}</dd>
          </div>
        </div>

        <div>
          <dt className="content__update">Latest update</dt>
          <dd className="content__description">
            {latestUpdate === '' ? 'No update yet' : latestUpdate}
          </dd>
        </div>

        <div className="content__actions">
          <Link
            href={latestLink}
            target="_blank"
            rel="noreferrer"
            className="content__actions-button"
          >
            Latest link <ChainIcon />
          </Link>
          {scormLink !== '' && (
            <Link
              href={scormLink}
              className="content__actions-button"
              target="_blank"
              rel="noreferrer"
            >
              Scorm <ChainIcon />
            </Link>
          )}
        </div>
      </dl>
    </div>
  )
}

export default Card
