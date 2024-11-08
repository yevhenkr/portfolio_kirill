import styled from "styled-components";
import {useEffect, useState} from "react";

type SkillType = {
    skillName: string
    percentage: number
}

export function Skill(props: SkillType) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(props.percentage);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SkillDiv>
            <span>{props.skillName}</span>
            <BarBackGround>
                <Progress width={progress}/>
            </BarBackGround>
        </SkillDiv>
    )

}

const Progress = styled.div<{ width: number }>`
    width: ${({width}) => width}%;
    background-color: #fff;
    height: 2px;
    transition: width 2s ease;
`;

const BarBackGround = styled.div`
    width: 100%;
    max-width: 485px;
    background-color: #545454;
    height: 1px;
    position: relative;
`;

const SkillDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 485px;
    font-size: 18px;
`