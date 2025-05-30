import { FC, SVGProps } from 'react'

export const ViewColumnIcon: FC<SVGProps<SVGSVGElement>> = ({
  className,
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="19"
    viewBox="0 0 25.5 19.5"
    className={className}
    onClick={onClick}
  >
    <path
      id="Icon_material-view-column"
      data-name="Icon material-view-column"
      d="M15,27h7.5V7.5H15ZM6,27h7.5V7.5H6ZM24,7.5V27h7.5V7.5Z"
      transform="translate(-6 -7.5)"
      fill="currentColor"
    />
  </svg>
)
