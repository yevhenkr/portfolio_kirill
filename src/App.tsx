import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";
import {Portfolio} from "./common/layout/section/portfolio/Portfolio";
import {Header} from "./common/layout/header/Header";
import {Main} from "./common/layout/main/main";
import {About} from "./common/layout/section/about/About";
import {Contact} from "./common/layout/section/contact/Contact";
import {Footer} from "./common/layout/footer/Footer.tsx";
import {useEffect, useState} from "react";
import {Testimonials} from "./common/layout/section/testimonials/Testimonials.tsx";
import {Achievement} from "./common/layout/section/achievement/Achievement.tsx";


export function App() {
    const [isabbutattop, setIsabbutattop] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        const body = document.body;
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (isModalOpen) {
            // Запрещаем скроллинг на основном содержимом
            body.style.position = 'fixed';
            body.style.top = `-${window.scrollY}px`;
            body.style.left = '0';
            body.style.width = '100%';
            body.style.overflow = 'hidden';
            body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            // Разрешаем скроллинг и сбрасываем стили
            body.style.position = '';
            body.style.top = '';
            body.style.left = '';
            body.style.width = '';
            body.style.overflow = '';
            body.style.paddingRight = '';
            window.scrollTo(0, parseInt(body.style.top || '0', 10) * -1);
        }
    }, [isModalOpen]);

    return (
        <AppStyle>
            <Header isAboutTop={isabbutattop} setHeadMenuOpen={setModalOpen}/> {/* Исправляем на camelCase */}
            <Main />
            {/*<About setIsAboutAtTop={setIsabbutattop} />*/}
            {/*<Portfolio />*/}
            <Achievement/>
            <Testimonials/>
            <Contact />
            <Footer />
        </AppStyle>
    );
}


const AppStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.regular};
    font-size: 35px;
    background-color: ${myTheme.color.backGround};;

    @media (max-width: ${myTheme.screen.medium}) {
        max-width: 768px;
        width: 100%;
    }
`;

