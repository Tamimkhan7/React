import Tutorial from './Component/Tutorial';
import GlobalStyle from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme="dark">
                <Tutorial />
            </ThemeProvider>
        </>
    )
}