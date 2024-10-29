import {useEffect, useState} from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "@radix-ui/react-select";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled.tsx";
import {ArrowDownIcon} from "../../../assets/icons/arrowDownIcon.tsx";
import {ArrowUpIcon} from "../../../assets/icons/arrowUpIcon.tsx";

////
function SelectLanguage() {
    const [selectedLanguage, setSelectedLanguage] = useState("1");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (selectedLanguage) {
            document.body.style.setProperty('overflow-y', 'auto', 'important');
            document.body.style.setProperty('margin', '0', 'important');
        } else {
            document.body.style.removeProperty('overflow-y');
        }
    }, [selectedLanguage]);

    const handleToggle = () => {
        setIsOpen(!isOpen); // Переключаем состояние при открытии/закрытии
    };

    return (
        <SelectWrapper>
            <StyleSelect onOpenChange={handleToggle} value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <StyledTrigger>
                    <StyleSpan>{selectedLanguage === "1" ? "UKR" : "ENG"}</StyleSpan>
                    <StyleDiv>
                        {isOpen ? <ArrowUpIcon/> : <ArrowDownIcon/>} {/* Меняем иконку */}
                    </StyleDiv>
                </StyledTrigger>
                <StyledContent>
                    <StyleItem value="1">UKR</StyleItem>
                    <StyleItem value="2">ENG</StyleItem>
                </StyledContent>
            </StyleSelect>
        </SelectWrapper>
    )
}

export default SelectLanguage;

const StyleDiv = styled.div`
    position: absolute;
    right: 22px;
    top: -1px;
`

const StyleSpan = styled.span`
    font-weight: 400;

    &:after {
        content: '';
        position: absolute;
    }
`
const StyleSelect = styled(Select)`
    display: flex;
    margin: 0 auto;
`

const StyleItem = styled(SelectItem)`
    outline: none;
    position: relative;
    cursor: default;
    &:hover {
        &:after {
            content: '';
            position: absolute;
            left: -4px;
            right: -4px;
            bottom: 0;
            border: 2px solid ${myTheme.color.yellow};
        }
    }
`
const SelectWrapper = styled.div`
    font-family: Jost;
    font-size: 20px;
    z-index: 5;
    color: white;
`;

const StyledContent = styled(SelectContent)`
    width: 120px;
    min-height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background: transparent;
    justify-content: center;
    border-radius: 4px;
    outline: none;
    border: none;
`

const StyledTrigger = styled(SelectTrigger)`
    outline: none;
    position: relative;
    width: 120px;
    display: flex;
    align-items: center;
    background: transparent;
    justify-content: center;
`;