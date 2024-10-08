import {useEffect, useRef} from 'react';
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {Skill} from "../../../ui/skill/Skill.tsx";

type AboutType = {
    setIsAboutAtTop: (value: boolean) => void;
};

export function About(props: AboutType) {
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (aboutRef.current) {
                const rect = aboutRef.current.getBoundingClientRect();
                if (rect.top <= 0) {
                    props.setIsAboutAtTop(rect.top <= 0);
                } else {
                    props.setIsAboutAtTop(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll); // Добавляем слушатель прокрутки

        return () => {
            window.removeEventListener('scroll', handleScroll); // Удаляем слушатель при размонтировании
        };
    }, []);

    return (
        <AboutWrapper ref={aboutRef} id={'About'}>
            <CommercialWrap>
                <CommercialWrap>
                    <CommercialCount>4</CommercialCount>
                    <CommercialLeftTextWrap>
                        <span>years</span>
                        <div>
                            <p>of commercial</p>
                            <p>experience</p>
                        </div>
                    </CommercialLeftTextWrap>
                </CommercialWrap>
                <CommercialWrap>
                    <CommercialCount>600+</CommercialCount>
                    <CommercialRightText>successful sales</CommercialRightText>
                </CommercialWrap>
                <div></div>
            </CommercialWrap>
            <TextContainer>
                <TextWrap>
                    <TitleText>About</TitleText>
                    <TopText>who am i</TopText>
                </TextWrap>
            </TextContainer>
            <AboutDescription>
                <StyledP>Hi, I’m Kirill. With 4 years of experience in motion design, I specialize in creating
                    eye-catching 2D and 3D animations that make your brand stand out.
                    Ready to elevate your business? My animations are crafted to captivate and convert, whether for
                    dynamic video intros, engaging social media content, or standout visuals. Let’s transform your
                    vision into powerful motion graphics that boost your market presence and drive sales. Partner with
                    me and watch your business soar!</StyledP>
                <AboutSkills>
                    <Skill skillName={"after effects"} percentage={"95%"}/>
                    <Skill skillName={"blender"} percentage={"50%"}/>
                    <Skill skillName={"Premiere Pro"} percentage={"90%"}/>
                    <Skill skillName={"Media Encoder"} percentage={"100%"}/>
                    <Skill skillName={"photoshop"} percentage={"70%"}/>
                </AboutSkills>
            </AboutDescription>
        </AboutWrapper>
    )
}

const CommercialWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1024px;
`
const CommercialLeftTextWrap = styled.div`
    position: relative;
    color: ${myTheme.color.yellow};
    left: -30px;
    top: 50%;
`
const CommercialRightText = styled.span`
    font-family: Inconsolata, serif;
    text-transform: uppercase;
    position: absolute;
    left: 100px;
    top: 50%;
    color: ${myTheme.color.yellow};
`
const CommercialCount = styled.span`
    font-family: Jost, serif;
    font-size: 230px;
    color: ${myTheme.color.greyBigNumber};
`

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${myTheme.color.white};
    background-color: ${myTheme.color.backGround};
    padding-top: 90px;
    align-items: center;
`;

const AboutDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding-bottom: 120px;
`;

const StyledP = styled.p`
    display: flex;
    flex-direction: row;
    max-width: 650px;
    width: 100%;
    font-size: 18px;
`;

const AboutSkills = styled.div`
    display: flex;
    row-gap: 34px;
    flex-direction: column;
    text-transform: uppercase;
`

const TextContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
`;

const TextWrap = styled.div`
    position: relative;
`;

const TitleText = styled.h2`
    font-size: 120px;
    color: ${myTheme.color.titleText};
    position: relative;
    z-index: 1;
    text-align: center;
    font-family: Jost, serif;
    line-height: 180.03px;
    letter-spacing: -0.04em;
    text-transform: uppercase;
`;

const TopText = styled.h2`
    font-family: Inconsolata, serif;
    text-transform: uppercase;
    font-size: 16px;
    color: ${myTheme.color.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0.7;
    text-align: center;
    width: 104px;
    height: 22px;
    white-space: nowrap;
`;
