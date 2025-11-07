// 메인 페이지 (인기글)
import {useEffect, useState} from "react";
import axios from "axios";

const Main = () => {
    const [board, setBoard] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8085/api/board/popular")
            // 1. 어떤 언어 코드에서든 하나의 기능을 작성할 경우 {} 생략
            // .then(res => res.data)
            .then((res) => {
                setBoard(res.data);
                console.log(res.data);
            })
            .catch(e => {
                alert("데이터 가져오기 실패");
            })
    }, [])

    // 오늘 날짜 포맷팅
    // react가 아닌 js에서 기본 사용 표현법
    // getMonth의 경우 0~11월로 되어있어 어떤 언어에서든 +1
    // .padStart(2,'')형식을 어떻게 시작할 것인가
    // 2자리 숫자로 맞출 것인데 하나의 자리만 존재한다면 맨 앞에 0 추가
    // 5월 11일 -> 05월 11일 형태로 자리수 표기
    const today = new Date();
    const 회사가원하는날짜표현 =`${today.getFullYear()}
                                        .${String(today.getMonth()+ 1).padStart(2,'0')}
                                        .${String(today.getDate()).padStart(2, '0')}`;
    return (
        <div className="page-container">
            <h1>메인 페이지</h1>
            <p>{회사가원하는날짜표현}  인기글 목록</p>
            {/* 7단계: 여기에 axios로 /api/board/popular를 호출하는 로직 추가 */}
            <ul>
                {/* html 내부에서는 {} 는 자바스크립트에서 선언한 변수 이름 상수 이름 기능 구현*/}
                {board.map(b => (
                    <li>{b.title} </li>
                ))}

            </ul>
        </div>
    );
}
export default Main;