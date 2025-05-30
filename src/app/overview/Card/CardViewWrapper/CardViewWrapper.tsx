'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

const CardViewWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0 // Reset scroll position on mount
    }
  }, [searchParams])

  const handleMouseWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY
    }
  }
  return (
    <div onWheel={handleMouseWheel} ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default CardViewWrapper
