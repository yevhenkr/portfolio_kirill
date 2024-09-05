import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled.tsx";
import {Skill} from "../../../ui/skill/Skill.tsx";

export function About() {
    return (
        <AboutWrapper>
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

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    background-color: ${myTheme.color.backGround};
    padding-top: 90px;
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
    align-items: flex-start;
    flex-direction: column;
    width: fit-content;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
`;

const TextWrap = styled.div`
    position: relative;
`;

const TitleText = styled.h2`
    font-size: 120px;
    color: #fff;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const TopText = styled.h2`
    font-family: Inconsolata;
    text-transform: uppercase;
    font-size: 16px;
    color: #ff0000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0.7;
    text-align: center;
    width: 104px;
    height: 22px;
`;
