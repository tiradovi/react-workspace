import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const BoardDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8085/api/board/${id}`)
            .then(res => {
                console.log(res.data);
                setBoard(res.data);
                setLoading(false);
            }).catch(e => {
            alert("게시물 불러오기 실패");
            navigate('/board');
        })
    }, [id, navigate]);

    // 로딩중인 경우
    if (loading) {
        return <div className="page-container">로딩중...</div>
    }
    return (
        <div className="page-container">
            <div className="board-detail-info">
                <span>작성자 : {board.writer} </span>
                <span>조회수 : {board.viewCount} </span>
                <span>작성일 : {board.createdAt} </span>
            </div>
            <div className="board-detail-content">
                {board.content}
            </div>
            <button className="button" onClick={() => navigate("/board")}>
                목록으로
            </button>
        </div>
    );
};

export default BoardDetail;