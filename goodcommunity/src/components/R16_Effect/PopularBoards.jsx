import {useEffect, useState} from "react";
import axios from "axios";

const PopularBoards = () => {
    const API_BASE_URL = "http://localhost:8080";
    const[popBoard, setPopBoard] = useState([]);
    useEffect(() => {
        const res = axios.get(`${API_BASE_URL}/api/board/popular`).then((res) => {
            setPopBoard(res.data);
            console.log(popBoard);
        }).catch((err) => {
            alert(err.response.data.message);
        });
    },[])

    return (
        <div>
            <h2>인기 게시물</h2>
            <ul>
                {popBoard.map((p) => (
                    <li>
                        <strong>{p.title}</strong>({p.createdAt})
                        (조회수:{p.viewCount})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularBoards;