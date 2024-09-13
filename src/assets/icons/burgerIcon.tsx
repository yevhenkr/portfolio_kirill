import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={21}
        fill="none"
        {...props}
    >
        <path fill="#fff" d="M5 0h27v3H5zM0 9h32v3H0zM3 18h29v3H3z"/>
    </svg>
)
export const BurgerIcon = memo(SvgComponent)
