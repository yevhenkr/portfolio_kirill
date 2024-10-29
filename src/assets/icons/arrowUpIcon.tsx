import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={10}
        height={6}
        fill="none"
        {...props}
    >
        <path fill="#fff" d="M.812 6 5 1.677 9.188 6 10 5.162 5 0 0 5.162.812 6Z"/>
    </svg>
)
export const ArrowUpIcon = memo(SvgComponent)
