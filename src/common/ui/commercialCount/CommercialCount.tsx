import {useEffect, useState} from 'react';
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled.tsx";

type CommercialCountType = {
    count:number
    addCount:number
    sign: string
    speed: number
}

export function CommercialCount(props:CommercialCountType) {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (count < props.count) {
            const interval = setInterval(() => {
                setCount((prevCount) => prevCount + props.addCount);
            }, props.speed); // Интервал обновления 50 мс

            return () => clearInterval(interval); // Очистка интервала
        }
    }, [count]);


    return (
        <CommercialCountStyle>{count}{props.sign}</CommercialCountStyle>
    )
}

const CommercialCountStyle = styled.span`
    font-family: Jost, serif;
    font-size: 230px;
    color: ${myTheme.color.yellow};
`