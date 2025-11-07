import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Write = () => {

    // react-router-dom에 존재하는 path 주소 변경 기능 사용
    const navigate = useNavigate();

    // form 데이터 내부 초기값
    // 작성자 -> 나중에 로그인한 아이디로 박제 변경 불가하도록
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        writer: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8085/api/board", formData);
        alert("글이 작성되었습니다.");
        navigate('/board');
    }
    const handleChange =(e)=>{
        const{name, value} = e.target;
        setFormData(p=>({...p, [name]: value}));
    }
    const handleCancel = ()=>{
        if(window.confirm("작성을 취소하시겠습니까?"))
            navigate("/board");// ok시 게시물 목록으로 돌려보내기
        // 기능이 하나이기 때문에 {생략}
    }

    return (
        < div className="page-container">
            < h1> 글쓰기 < /h1>
            <form onSubmit={handleSubmit}>
                <label>작성자:
                <input type="text"
                       id="writer"
                       name="writer"
                       value={formData.writer}
                       onChange={handleChange}
                       placeholder="작성자를 입력하세요"
                       maxLength={50}
                       required/>
                </label>
                <label>제목:
                    <input type="text"
                           id="title"
                           name="title"
                           value={formData.title}
                           onChange={handleChange}
                           placeholder="제목을 입력하세요"
                           maxLength={200}
                           required/>
                </label>
                <label>내용:
                    <textarea id="content"
                           name="content"
                           value={formData.content}
                           onChange={handleChange}
                           placeholder="내용을 입력하세요"
                           rows={15}
                           required/>
                </label>
                <button type="submit"> 작성하기 </button>
                <button type="button" onClick={handleCancel}> 돌아가기 </button>
            </form>
        </div>
    )
};
/*

// 소괄호 js 작성 불가, 단순 html만 작성 가능
const 소괄호 = () => (
    <div className="page-container">
        <h1>글쓰기</h1>
        {/!*
        예외적으로 js가 필요할 경우
        html 내부에서 js를 작성가능하긴 하다
        사용 지양
        Parent에서 매개변수로 props를 전달 받고 사용하기만 할 때 사용
        *!/}
        <p>새 게시물 작성 폼</p>
    </div>
);

// { 시작하고 return 전에 js 사용 가능
const 중괄호 = () => {
    return (
        <div className="page-container">
            <h1>글쓰기</h1>
            <p>새 게시물 작성 폼</p>
        </div>
    )
};

*/

export default Write;