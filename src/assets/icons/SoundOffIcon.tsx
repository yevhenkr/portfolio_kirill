import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={22}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M1.1 22a1.1 1.1 0 0 1-.696-1.951l19.8-16.191a1.1 1.1 0 1 1 1.392 1.703l-19.8 16.192A1.1 1.1 0 0 1 1.1 22Zm15.4 0a1.1 1.1 0 0 1-.447-.095L9.261 18.89a1.1 1.1 0 1 1 .893-2.01l5.246 2.328v-6.996a1.1 1.1 0 0 1 2.2 0V20.9a1.1 1.1 0 0 1-1.1 1.1Z"
        />
        <path
            fill="#fff"
            d="M6.519 17.57c-.154 0-.306-.033-.446-.095l-1.433-.638H1.1a1.1 1.1 0 0 1-1.1-1.1V6.262a1.1 1.1 0 0 1 1.1-1.1h3.54L16.053.095A1.1 1.1 0 0 1 17.6 1.1v7.207a1.1 1.1 0 0 1-2.2 0V2.792L5.318 7.269c-.14.062-.292.094-.445.093H2.2v7.276h2.673a1.1 1.1 0 0 1 .445.094l1.648.732a1.1 1.1 0 0 1-.447 2.105Z"
        />
    </svg>
)
export const SoundOffIcon = memo(SvgComponent)
