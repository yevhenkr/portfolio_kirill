import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={22}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M16.406 21.875c-.153 0-.304-.032-.444-.094L4.613 16.742h-3.52A1.094 1.094 0 0 1 0 15.648V6.227a1.094 1.094 0 0 1 1.094-1.094h3.52L15.961.094a1.094 1.094 0 0 1 1.538 1V20.78a1.093 1.093 0 0 1-1.094 1.094Zm-14.218-7.32h2.657c.153 0 .304.031.444.094l10.024 4.45V2.776L5.289 7.228c-.14.061-.29.093-.444.093H2.188v7.234Zm19.003 2.502a1.094 1.094 0 0 1-1.093-1.094V5.624a1.094 1.094 0 1 1 2.187 0v10.34a1.094 1.094 0 0 1-1.094 1.093Zm5.265 4.53a1.094 1.094 0 0 1-1.094-1.093v-19.4a1.094 1.094 0 1 1 2.187 0v19.4a1.094 1.094 0 0 1-1.093 1.093Z"
        />
    </svg>
)
export const SoundOnIcon = memo(SvgComponent)
