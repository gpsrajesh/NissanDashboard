'use client'
import { FC, useEffect, useState } from 'react'

import './CircleBar.scss'

type CircleBarProps = {
  value: number
  strokeWidth: number
  svgWidth: number
  className?: string
}

const CircleBar: FC<CircleBarProps> = ({
  value = 0,
  strokeWidth,
  svgWidth,
  className,
}) => {
  const [counter, setCounter] = useState(0)

  const viewBox = `0 0 ${svgWidth} ${svgWidth}`
  const radius = svgWidth / 2 - strokeWidth / 2

  const perimeter = radius * 2 * Math.PI
  const lengthCircle = perimeter - (counter / 100) * perimeter

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < value) {
        setCounter((prevCounter) => prevCounter + 1)
      }
    }, 10)

    return () => clearInterval(interval)
  }, [value, counter])

  return (
    <div
      className={`circle-bar ${className}`}
      style={{ width: svgWidth, height: svgWidth }}
    >
      <svg
        className="circle-bar__svg"
        width={svgWidth}
        height={svgWidth}
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circle-bar__track"
          r={radius}
          cx={svgWidth / 2}
          cy={svgWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={perimeter}
          strokeDashoffset={0}
        />
        <circle
          className="circle-bar__progress"
          r={radius}
          cx={svgWidth / 2}
          cy={svgWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={perimeter}
          strokeDashoffset={lengthCircle + 'px'}
        />
      </svg>
      <div className="circle-bar__content">
        <p className="circle-bar__content-p1">{counter}%</p>
        <p className="circle-bar__content-p2">Complete</p>
      </div>
    </div>
  )
}

export default CircleBar
