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
        <path fill="#fff" d="M9.188 0 5 4.323.812 0 0 .838 5 6l5-5.162L9.188 0Z"/>
    </svg>
)
export const ArrowDownIcon = memo(SvgComponent)
