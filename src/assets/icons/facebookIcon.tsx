import * as React from "react";
import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={7}
        height={14}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M.224 7.456h1.518v6.318c0 .125.1.226.224.226h2.576a.225.225 0 0 0 .223-.226V7.486h1.746c.114 0 .21-.086.222-.2l.265-2.326a.227.227 0 0 0-.055-.176.223.223 0 0 0-.167-.075h-2.01V3.25c0-.44.233-.663.695-.663h1.315A.225.225 0 0 0 7 2.362V.227c0-.124-.1-.225-.224-.225H4.964C4.951 0 4.923 0 4.881 0c-.314 0-1.407.062-2.27.865-.958.89-.825 1.954-.793 2.139v1.705H.224A.225.225 0 0 0 0 4.934v2.297c0 .124.1.225.224.225Z"
        />
    </svg>
);
export const FacebookIcon = memo(SvgComponent);
