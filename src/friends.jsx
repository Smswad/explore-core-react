import { use } from "react";
import Friend from "./friend";

export default function Friends({ friendsPromise }) {
    const friends = use(friendsPromise);
    console.log(friends);
    return (
        <div>
            <h1>Friends:{friends.length}</h1>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}