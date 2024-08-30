import {createRoot} from 'react-dom/client'
import { App } from './App.tsx'
import {myTheme} from "./styles/Theme.styled.tsx";
import {ThemeProvider} from "styled-components";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={myTheme}>
        <App/>
    </ThemeProvider>

)
