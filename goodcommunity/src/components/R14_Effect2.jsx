import {useEffect, useState} from "react";


const Effect2 = () => {
    const [seconds, setSeconds] = useState(0);

    /**
     * setInterval : 시작
     * clearInterval : 종료[setInterval을 정지]
     * 시작해놓고 미 종료시 메모리를 닫을 방법이 없음
     *
     * 자동시작후 버튼을 클릭해서 개발자와 회사가 원하는 특정 시간에 멈추고 싶다면
     * useRef
     */

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        // 시작할 타이머를 종료할 clear 설정
        // 뒷정리 함수
        return () => {
            clearInterval(timerId);
        };
    }, []);
    return (
        <div>
            <h2>자동 타이머</h2>
            {seconds} 초
        </div>
    );
};

export default Effect2;