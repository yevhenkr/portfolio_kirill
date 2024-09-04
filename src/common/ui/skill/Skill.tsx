import styled from "styled-components";
type SkillType ={
    skillName: string
    percentage: string
}


export function Skill(props: SkillType) {
    return (
        <SkillDiv>
            <span>{props.skillName}</span>
            <BarBackGround>
                <Bar width={props.percentage}/>
            </BarBackGround>
        </SkillDiv>
    )

}

const BarBackGround = styled.div`
    width: 100%;
    max-width: 485px;
    background-color: #545454;
    height: 1px;
    position: relative;
`;
type BarProps = {
    width?: string; // Опциональный пропс для ширины
};

const Bar = styled.div<BarProps>`
    width: ${(props) => props.width }; /* Использует переданную ширину или значение по умолчанию */
    background-color: #fff;
    height: 3px;
    position: absolute; /* Абсолютное позиционирование */
    top: -2px; /* Смещение выше \`BarBackGround\` */
    left: 0;
   
`;

const SkillDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 485px;
    font-size: 18px;
  
`