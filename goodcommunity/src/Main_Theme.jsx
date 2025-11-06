import {createContext, useState} from "react";
import Header from "./components/R11_Context_Theme/Header";
import Content from "./components/R11_Context_Theme/Content";
import Footer from "./components/R11_Context_Theme/Footer";
import {darkTheme, lightTheme} from "./components/R11_Context_Theme/themeStyles";


// 테마를 위한 Context 생성
// 한 페이지에서 다수의 const를 export 내보내기 처리 가능
// export는 다수로 작성 가능하나
// export default는 하나
export const ThemeContext = createContext();

// 부모 컴포넌트 (최상위 앱)
const Main_Theme = () => {
    // 다크모드 on/off 상태
    const [isDark, setIsDark] = useState(false);

    // 테마 전환 함수
    const toggleTheme = () => {
        setIsDark(!isDark); // 현재상태의 반대로 값 설정하기
    }
    return (
        // Context로 isDark와 toggleTheme 함수를 모든 하위 컴포넌트에서
        // 사용할 수 있도록 제공
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            <div  style={isDark? darkTheme.main : lightTheme.main}>
                <Header/>
                <Content/>
                <Footer/>
            </div>

        </ThemeContext.Provider>
    );
};

export default Main_Theme;