import { ChainIcon } from '@/assets/icons/ChainIcon'
import Link from 'next/link'
import { FC } from 'react'

import './Row.scss'

type RowProps = {
  name: string
  percent: number
  date: string
  type: string
  latestLink: string
  scormLink: string
}

const Row: FC<RowProps> = ({
  name,
  percent,
  date,
  type,
  scormLink,
  latestLink,
}) => {
  return (
    <div className="row">
      <span className="row__badge">{name}</span>
      <Link
        href={latestLink}
        className="row__button"
        target="_blank"
        rel="noreferrer"
      >
        Latest link <ChainIcon />
      </Link>
      {scormLink !== '' && (
        <Link
          href={scormLink}
          className="row__button"
          target="_blank"
          rel="noreferrer"
        >
          Scorm <ChainIcon />
        </Link>
      )}
      <div className="row__bar">
        <div className="width-percent" style={{ width: `${percent}%` }} />
        <dl className="data">
          <dt className="data__percent">{percent}% percent complete</dt>
          <dt className="data__description">{type}</dt>
          <div className="data__estate">
            <dt className="data__estate-title">Est completion</dt>
            <dd className="data__estate-date">{date}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Row
