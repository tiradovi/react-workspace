import {useContext} from "react";
import {ThemeContext} from "../../Main_Theme";
import {lightTheme, darkTheme} from "./themeStyles";

const Content = () => {
    const {isDark} =useContext(ThemeContext);
    const theme = isDark ? darkTheme : lightTheme;

    return (
        <main style={theme.content.container}>
            <h2 style={theme.content.text}>본문 내용</h2>
            <p style={theme.content.text}>현재 모드: {isDark?'다크 모드':'라이트모드'}</p>
            <p style={theme.content.text}>Context를 사용하면 props 전달없이 테마정보 가져오기 가능</p>
        </main>
    );
};

export default Content;