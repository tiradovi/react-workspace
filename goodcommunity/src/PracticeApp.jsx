import LikeButton from "./components/practices/day2/LikeButton";
import TodoInput from "./components/practices/day2/TodoInput";
import TemperatureConverter from "./components/practices/day2/TemperatureConverter";
import Greeting from "./components/practices/day1/Greeting";
import MyProfile from "./components/practices/day1/MyProfile";
import Product from "./components/practices/day1/Product";
import Weather from "./components/practices/day1/Weather";

const PracticeApp = () => {
    return (
        <>
            <MyProfile name="홍길동" age={20} school="서울대학교"/>
            <Greeting message="안녕하세요! React 입니다" />
            <Product productName="노트북" price={1500000} />
            <Product productName="마우스" price={30000} />
            <Weather city="서울" temperature={25} />
            <Weather city="부산" temperature={28} />

            <LikeButton/>
            <TodoInput/>
            <TemperatureConverter/>
        </>
    );
};

export default PracticeApp;