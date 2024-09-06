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
            d="M16 2C8.268 2 2 8.268 2 16c0 6.566 4.52 12.075 10.618 13.588v-9.31H9.731V16h2.887v-1.843c0-4.765 2.156-6.974 6.835-6.974.887 0 2.417.174 3.043.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296 0-3.183.87-3.183 3.13V16h4.573l-.786 4.278h-3.787v9.619C24.628 29.06 30 23.157 30 16c0-7.732-6.268-14-14-14Z"/>
    </svg>
)
export const FacebookIcon = memo(SvgComponent)
