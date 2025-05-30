import { FC, SVGProps } from 'react'

export const FileIcon: FC<SVGProps<SVGSVGElement>> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22.5"
    height="30"
    viewBox="0 0 22.5 30"
    fill="currentColor"
    className={className}
  >
    <path d="M22.09,6.152,16.348.41a1.405,1.405,0,0,0-1-.41H15V7.5h7.5V7.143A1.4,1.4,0,0,0,22.09,6.152ZM13.125,7.969V0H1.406A1.4,1.4,0,0,0,0,1.406V28.594A1.4,1.4,0,0,0,1.406,30H21.094A1.4,1.4,0,0,0,22.5,28.594V9.375H14.531A1.41,1.41,0,0,1,13.125,7.969Z" />
  </svg>
)
