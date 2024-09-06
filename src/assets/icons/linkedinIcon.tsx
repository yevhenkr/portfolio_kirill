import * as React from "react"
import {SVGProps, memo} from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill={props.fill || "black"} // Используем fill для цвета иконки
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M26.111 3H5.889A2.89 2.89 0 0 0 3 5.889v20.222A2.89 2.89 0 0 0 5.889 29h20.222A2.89 2.89 0 0 0 29 26.111V5.889A2.89 2.89 0 0 0 26.111 3Zm-15.25 22.389H6.984V12.87h3.877v12.519ZM8.904 11.231c-1.267 0-2.293-1.034-2.293-2.31s1.026-2.31 2.293-2.31 2.292 1.034 2.292 2.31-1.026 2.31-2.292 2.31Zm16.485 14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551 0-2.362 1.048-2.362 2.809v6.571H13.34V12.87h3.718v1.686s1.118-2.069 3.775-2.069 4.556 1.621 4.556 4.975v7.926Z"
        />
    </svg>
)
export const LinkedinIcon = memo(SvgComponent)
