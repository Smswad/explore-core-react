import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixs, setSixs] = useState(0);
    const [fours, setFours] = useState(0);
    const [isOut, setisOut] = useState(false);
    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(0);
    const [end, setEnd] = useState(false);
    

    const handleBall = () => {
        const newBalls = balls + 1;
        setBalls(newBalls);

        if (balls % 6 == 0 && balls != 0) {
            let newOvers = overs + 1;
            alert(`${newOvers} Over is Gone`);
            if (overs == 20) {
                alert(`${newOvers} Over is Gone & the Match is Ended.`);
                setEnd(true)
            }
            setOvers(newOvers);
        }
    }

    const handleAdd = () => {
        const newRuns = runs + 1;
        setRuns(newRuns);
    }
    const SixAdd = () => {
        const newRuns = runs + 6;
        const countSix = sixs + 1;
        setRuns(newRuns);
        setSixs(countSix);
    }
    const FourAdd = () => {
        const newRuns = runs + 4;
        const countFour = fours + 1;
        setRuns(newRuns);
        setFours(countFour);
    }
    const Out = () => {
        alert(`Batsman Out! He scored ${runs}`);
        setisOut(true);
    }
    const BatsmanStyle = {
    }
    return (
        <div style={BatsmanStyle}>
            <h1>Score: {runs}</h1>
            <h3>Six: {sixs}</h3>
            <h3>Four: {fours}</h3>
            <h3>Balls: {balls}</h3>
            <h3>Overs: {overs}</h3>
            {/* {
                runs > 50 && <h2>Your Runs is: 50</h2>
            } */}
            <button onClick={handleAdd} disabled={isOut}>Runs</button>
            <button onClick={SixAdd} disabled={isOut}>Six</button>
            <button onClick={FourAdd} disabled={isOut}>Four</button>
            <button onClick={handleBall} disabled={end}>Ball</button>
            <button onClick={Out} disabled={isOut}>OUT!</button>
        </div>
    )
}