// 전체 게시판
import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Board = () => {
    const [board, setBoard] = React.useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8085/api/board/all").then((res) => {
            setBoard(res.data);
        })
    }, [])

    const handleIDClick = (id) => {
        navigate(`/board/${id}`);
    }

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
                    <tr key={b.id}>
                        <td  onClick={() => handleIDClick(b.id)}>{b.id}</td>
                        <td  onClick={() => handleIDClick(b.id)}>{b.title}</td>
                        <td>{b.writer}</td>
                        <td>{b.viewCount}</td>
                        <td>{b.createdAt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Board;