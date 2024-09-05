import styled from "styled-components";
import {Button} from "../../../ui/button/Button.tsx";
import {myTheme} from "../../../../styles/Theme.styled.tsx";

export function Contact() {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // const offset = props.height; // Указать необходимое смещение
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: (elementPosition),
                behavior: "smooth"
            });
        }
    };
    return (
        <SectionStyled id={'Contact'}>
            <NameStyled>Kiril Y</NameStyled>
            <DivStyled>
                <SubscribeStyled>
                    <PStyled>Subscribe to newsletter to get some updates related with branding, designs and
                        more.</PStyled>
                    <InputStyled placeholder={"write your email address"}/>
                    <Button margin={"inherit"} title={"subscribe it"} background_color={"#fff"} color={"#000"}
                            padding={"11px 0"}/>
                </SubscribeStyled>
                <ul>
                    <LinkStyled><AStyled onClick={() => handleClick("Home")}>Home </AStyled></LinkStyled>
                    <LinkStyled><AStyled onClick={() => handleClick("About")}>About </AStyled></LinkStyled>
                    <LinkStyled><AStyled onClick={() => handleClick("Portfolio")}>Portfolio </AStyled></LinkStyled>
                </ul>
                <RightPart>
                    <ContactText>Just feel free to contact if you wanna collaborate with me, or simply have a conversation.</ContactText>
                    <Mail>kirill.yakubov@gmail.com</Mail>
                </RightPart>
            </DivStyled>
        </SectionStyled>
    );
}
const Mail = styled.span`
    position: relative;
    display: inline-block;
    padding-bottom: 6px; /* Отступ от текста до линии */

    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px; /* Толщина линии */
        background-color: white; /* Цвет линии */
    }
`
const ContactText = styled.p`
    font-size: 17px;
    padding-bottom: 32px;
    line-height: 225%;

`
const RightPart = styled.div`
    max-width: 410px;
    width: 100%;
`
const LinkStyled = styled.li`
    :hover {
        color: grey;
    }`
const AStyled = styled.a`
    font-size: 17px;
    line-height: 150%; /* Более стандартное значение */
`;
const InputStyled = styled.input`
    width: 100%; /* Задает ширину 100% от родителя */
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 10px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 22px;
    box-sizing: border-box; /* Включает padding и border в общую ширину */
`;

const SubscribeStyled = styled.div`
    display: flex;
    max-width: 300px;
    flex-direction: column;
    margin-bottom: 100px;
`;

const DivStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 200px;
    padding-right: 200px;
`;

const SectionStyled = styled.section`
    padding-top: 160px;
    color: white;
    max-width: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background-color: ${myTheme.color.backGround};
`;

const PStyled = styled.p`
    font-size: 18px;
    line-height: 225%;
    padding-bottom: 38px;
`;

const NameStyled = styled.p`
    padding-bottom: 34px;
    font-size: 36px;
    margin-left: 280px;
`;
