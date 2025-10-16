export default function Todo({ work, time, Count = 0, isDone }) {
    if (isDone === true) {
        return (
            <div>
                <h1>To Do list -{Count}</h1>
                <h3>Work: {work}</h3>
                <h3>Deadline: {time}</h3>
                <h3>Progress: <span style={{ color: "green" }}>✔ Completed</span></h3>
            </div>
        )
    }
    else if (isDone === false) {
        return (
            <div>
                <h1>To Do list -{Count}</h1>
                <h3>Work: {work}</h3>
                <h3>Deadline: {time}</h3>
                <h3>Progress: <span style={{ color: "red" }}>❌ Terminated</span></h3>
            </div>
        )
    }
    else if (work === null || time === null) {
        return null;
    } else {
        return (
            <div>
                <h1>To Do list -{Count}</h1>
                <h3>Work: {work}</h3>
                <h3>Deadline: {time}</h3>
                <h3>Progress: <span style={{ color: "yellow" }}>⚠ In Progress</span></h3>
            </div>
        )
    }
};