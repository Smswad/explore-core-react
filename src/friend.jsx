export default function Friend({ friend }) {
    console.log(friend);
    const { name } = friend;
    return (
        <div>
            <h2>Name: {name}</h2>
        </div>
    )
}