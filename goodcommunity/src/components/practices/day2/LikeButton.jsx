import React, { useState } from 'react';

const LikeButton = () => {
    // 여기에 코드 작성
    // 1. useState로 좋아요 수 상태 만들기 (초기값: 0)
    const [like, setLike] = useState(0);
    // 2. 증가 함수 만들기
    const plusFn= () =>{
        setLike(like+1);
    }
    // 3. 초기화 함수 만들기
    const resetFn= () =>{
        setLike(0);
    }

    return (
        <div>
            {/* 좋아요 수 표시 */}
            <h1>좋아요 : {like}</h1>
            {/* 하트 버튼 */}
            <button onClick={plusFn}>좋아요 ♥️️</button>
            {/* 초기화 버튼 */}
            <button onClick={resetFn}>[초기화]</button>
            {/* 10 이상이면 메시지 표시 */}
            {like>=10 &&(<div>
                🔥인기 게시물입니다.
            </div>)}

        </div>
    );
}

export default LikeButton;