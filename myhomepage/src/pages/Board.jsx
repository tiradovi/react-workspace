// 전체 게시판
import React, {useEffect} from "react";
import axios from "axios";

const Board = () => {
    const [board, setBoard] = React.useState([]);

    useEffect(() => {
        axios.get("http://localhost:8085/api/board/all").then((res) => {
            setBoard(res.data);
        })
    },[])

    return (
        <div className="page-container">
            <div className="board-header">
                <h1>게시판</h1>
                <button className="button">
                    글쓰기
                </button>
            </div>

            <div className="board-info">
                <p>전체 게시물: {board.length} 개</p>
            </div>

            <table className="board-table">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>작성일</th>
                </tr>
                </thead>
                <tbody>
                {board.map((b) => (
                    <tr>
                        <th>{b.id}</th>
                        <th>{b.title}</th>
                        <th>{b.writer}</th>
                        <th>{b.viewCount}</th>
                        <th>{b.createdAt}</th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Board;