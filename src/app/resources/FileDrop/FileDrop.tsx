'use client'
import React, { useRef, useState } from 'react'

import { CloudIcon } from '@/assets/icons/CloudIcon'

import './FileDrop.scss'

const FileDrop = () => {
  const [isOver, setIsOver] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const dragEnterHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOver(true)
    console.log('drag enter: ', isOver)
  }
  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOver(false)
    console.log('drag leave: ', isOver)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    const files: File[] = Array.from(e.dataTransfer.files)
    const newFileList = new DataTransfer()
    files.forEach((file) => newFileList.items.add(file))

    if (inputRef.current?.files) {
      inputRef.current.files = newFileList.files
    }
  }

  return (
    <div className="file-drop">
      <header className="file-drop__header">
        <p className="title">Do you want to upload some files?</p>
      </header>
      <section
        className={`file-drop__content ${
          isOver ? 'file-drop__content--is-dragging' : ''
        }`}
        onDragOver={dragOverHandler}
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
      >
        <CloudIcon className="icon" />
        <p>Drag files to upload</p>
        <small>or</small>
        <input ref={inputRef} type="file" className="file-button" multiple />

        <p>
          <small>
            Max file size: <strong>500 Mb</strong>
          </small>
        </p>
        <p className="supported-files">
          Supported file types:
          <strong>JPG, PNG, GIF, ZIP, PPT, DOC, PDF, SVG, MP4, MP3</strong>
        </p>
      </section>
    </div>
  )
}

export default FileDrop
