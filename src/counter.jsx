import { useState } from "react"

export default function () {
    const [count, SetCount] = useState(0);

    const handleAdd = () => {
        // console.log(`Add btn clicked!`);
        // SetCount(5);
        const newCount = count + 1;
        SetCount(newCount);
    }
    const counterStyle = {
        // border: '2px solid orange'
    }
    return (
        <div style={counterStyle}>
            <button onClick={handleAdd}>count is {count}</button>
        </div>
    )
}