import { useCallback, useState } from "react";

const TodoFrom = ({onInsert}) => {
    const [value, setValue] = useState("");
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

export default TodoFrom;