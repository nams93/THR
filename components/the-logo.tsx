import type { SVGProps } from "react"

interface TheLogoProps extends SVGProps<SVGSVGElement> {
  className?: string
}

export default function TheLogo({ className, ...props }: TheLogoProps) {
  return (
    <svg
      width="100"
      height="40"
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M20 5H80V10H55V35H45V10H20V5Z" fill="#FF0000" stroke="#FF0000" strokeWidth="2" />
      <path d="M15 15H30V20H20V35H15V15Z" fill="#FF0000" stroke="#FF0000" strokeWidth="2" />
      <path d="M70 15H85V35H80V20H70V15Z" fill="#FF0000" stroke="#FF0000" strokeWidth="2" />
    </svg>
  )
}

