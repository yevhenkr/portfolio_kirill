import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {CopyText} from "../../../ui/copyText/CopyText.tsx";

export function Contact() {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: (elementPosition),
                behavior: "smooth"
            });
        }
    };
    return (
        <SectionStyled id={'Contact'}>
            <NameStyled>Kirill Y.</NameStyled>
            <DivStyled>
                <SubscribeStyled>
                    <PStyled>Just feel free to contact if you wanna collaborate with me, or simply have a
                        conversation.</PStyled>
                    <WrapperEmailStyled>
                        <Mail>kiwi.media.ua@gmail.com</Mail>
                        <CopyText/>
                    </WrapperEmailStyled>
                </SubscribeStyled>
                <UlStyled>
                    <LinkStyled><AStyled onClick={() => handleClick("Home")}>Home </AStyled></LinkStyled>
                    <LinkStyled><AStyled onClick={() => handleClick("About")}>About </AStyled></LinkStyled>
                    <LinkStyled><AStyled onClick={() => handleClick("Portfolio")}>Portfolio </AStyled></LinkStyled>
                    <LinkStyled><AStyled
                        onClick={() => handleClick("Testimonials")}>Testimonials </AStyled></LinkStyled>
                    <LinkStyled><AStyled onClick={() => handleClick("Contact")}>Contact </AStyled></LinkStyled>
                </UlStyled>
            </DivStyled>
        </SectionStyled>
    );
}

const WrapperEmailStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    right: 1px;
`


const Mail = styled.span`
    position: relative;
    display: inline-block;
    padding-bottom: 6px; /* Отступ от текста до линии */
    margin-bottom: 40px;

    &::after {
        content: '';
        position: absolute;

        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background-color: ${myTheme.color.white};
    }
`
const UlStyled = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    max-height: 150px; /* Ограничение по высоте */
    row-gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto; /* Добавляем вертикальную прокрутку */
`

const LinkStyled = styled.li`
    line-height: 1.2;

    :hover {
        color: ${myTheme.color.grey};
    }`
const AStyled = styled.a`
    font-size: 17px;
    line-height: 150%;
    text-transform: uppercase;
`;

const SubscribeStyled = styled.div`
    display: flex;
    max-width: 400px;
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
    color: ${myTheme.color.white};
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

const LinkWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    column-gap: 18px;
`
const SocialItem = styled.li`
    display: flex;
    justify-content: center; /* Центрирует содержимое по горизонтали */
    align-items: center; /* Центрирует содержимое по вертикали */
`
const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`