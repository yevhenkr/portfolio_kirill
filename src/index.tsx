import {createRoot} from 'react-dom/client'
import { App } from './App'
import './index.css';

import {myTheme} from "./styles/Theme.styled";
import {ThemeProvider} from "styled-components";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={myTheme}>
        <App/>
    </ThemeProvider>

)
