import React from 'react'
import './ListViewWrapper.scss'

const ListViewWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="list-view-wrapper">{children}</div>
}

export default ListViewWrapper
