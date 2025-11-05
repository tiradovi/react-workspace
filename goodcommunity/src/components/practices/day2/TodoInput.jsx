import React, {useState} from 'react';

const TodoInput = () => {

    const [todo, setTodo] = useState('');
    const handleInputChange = (e) => {
        setTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (todo.trim()) {
            alert(`할일 추가 ${todo}`);
            setTodo('');
        }
    };

    return (
        <div>
            <h2>할일 입력</h2>
            {/* input */}
            <input
                type="text"
                value={todo}
                onChange={handleInputChange}
                placeholder="할일을 입력하세요"
            />

            {/* 글자 수 표시 */}
            <div>글자 수: {todo.length}/50</div>

            {/* 50자 초과 시 경고 메시지 */}
            {todo.length > 50 && <div>⚠️ 글자 수 초과</div>}

            {/* 추가 버튼 (비어있거나 초과 시 비활성화) */}
            <button
                disabled={todo.trim().length === 0 || todo.length > 50}
                onClick={handleAddTodo}
            >
                추가
            </button>

            {/* 입력한 내용 미리보기 */}
            {todo && <div>입력한 내용: {todo}</div>}
        </div>
    );
};

export default TodoInput;
