import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill={props.fill || "black"}
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M12.444 0H1.556C.696 0 0 .696 0 1.556v10.888C0 13.304.696 14 1.556 14h10.888c.86 0 1.556-.696 1.556-1.556V1.556C14 .696 13.304 0 12.444 0ZM4.233 12.056H2.145V5.315h2.088v6.74ZM3.179 4.432a1.239 1.239 0 0 1-1.235-1.244c0-.687.553-1.244 1.235-1.244s1.234.557 1.234 1.244c0 .687-.552 1.244-1.234 1.244Zm8.877 7.624H9.978V8.517c0-.97-.369-1.512-1.136-1.512-.836 0-1.272.564-1.272 1.512v3.539H5.568V5.315H7.57v.907s.602-1.114 2.032-1.114c1.431 0 2.454.873 2.454 2.68v4.268Z"
            clipRule="evenodd"
        />
    </svg>
)

export const LinkedinIcon = memo(SvgComponent);