import {createContext, useContext, useState} from "react";

/* 1. Context 객체 생성 -> prop 없이 상태값이나 테이터 사용 가능
*     중간다리 역할인 js나 jsx를 건너뛰고 필요한 js or jsx에서
*     부모에서 만들어놓은 상태나 데이터 사용하겠다라는
*     useContext(Context명칭)을 component 내부에 선언하면
*     어디서든 사용 가능한 hook
* */

const TestContext = createContext();

const GrandChild = () => {
    const {number,setNumber}=useContext(TestContext);
    return(
        <>
            <h3>GrandChild Component</h3>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
            <h4>{number}</h4>
        </>
    )
}

/* 3. 자식 컴포넌트 Context를 사용하지 않고, GrandChild를 포함하고 있는
* 컴포넌트임을 명시하기 위해 작성한 Child 컴포넌트
*  */
const Child = () => {
    return(
        <>
            <h2>Child Component</h2>
                <GrandChild/>
        </>
    )
}
const Parent = () => {
    // 상태변수 선언
    const [number, setNumber] = useState(0);
    return (
        // Context는 값을 1개만 제공 가능
        // -> 여러개 제공시 {} [] 로 묶기
        // 리액트에서 {number, setNumber} 작성하면 아래와 같이 변환
        // {"number": number, "setNumber":setNumber}
    <TestContext.Provider value={{number, setNumber}}>
        <h1>
            Parent Component :
            {/* Parent 컴포넌트의 상태값 출력*/}
            <span className='red'>{number}</span>
        </h1>
        <Child/>
    </TestContext.Provider>
    );
};

export default Parent;