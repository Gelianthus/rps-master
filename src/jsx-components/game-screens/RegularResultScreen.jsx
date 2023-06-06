import { useState, useEffect } from "react";
import PaperComponent from "../reusable-components/Paper";
import ScissorsComponent from "../reusable-components/Scissors";
import RockComponent from "../reusable-components/Rock";
import Blank from "../reusable-components/Blank";

function RegularResultScreen ({ setScore, setIsHandSelected, setPick, setComputerPick, pick, computerPick }) {

    const [ result, setResult ] = useState(null);
    const [ visible, setVisible ] = useState(false);

    const playAgain = () => {
        setIsHandSelected(false);
        setPick("");
        setComputerPick("");
        setResult(null);
        setVisible(false);
    }

    useEffect(() => {
        pick === "PAPER" && computerPick === "ROCK" ? setResult("WIN") :
        pick === "PAPER" && computerPick === "SCISSORS" ? setResult("LOSE") :
        pick === "SCISSORS" && computerPick === "ROCK" ? setResult("LOSE") :
        pick === "SCISSORS" && computerPick === "PAPER" ? setResult("WIN") :
        pick === "ROCK" && computerPick === "PAPER" ? setResult("LOSE") :
        pick === "ROCK" && computerPick === "SCISSORS" ? setResult("WIN") :
        setResult("DRAW");
    }, [computerPick]);

    useEffect(() => {
        result && setVisible(true);
    }, [computerPick]);

    useEffect(() => {
        result === "WIN" && setScore(prevScore => prevScore + 1);
    }, [result]);

    return (
        <div >
            <div className="result-screen">
            <div className="pick-container">
                <p>YOU PICKED</p>
                <div className={`pick-wrapper ${result === "WIN" && "pulse-shadow"}`}>
                    {
                        pick === "ROCK" ? <RockComponent /> : 
                        pick === "PAPER" ? <PaperComponent /> :
                        <ScissorsComponent />
                    }
                </div>
            </div>
            <div className={`result-container ${!visible && "not-visible"}`}>
                <p className="result">
                    {
                        result === "WIN" ? "YOU WIN" :
                        result === "LOSE" ? "YOU LOSE" :
                        "DRAW"
                    }
                </p>
                <button className="play-again-button" onClick={playAgain}>PLAY AGAIN</button>
            </div>
            <div className="pick-container">
                <p>THE HOUSE PICKED</p>
                <div className={`pick-wrapper ${result === "LOSE" && "pulse-shadow"}`}>
                    {
                        computerPick === "ROCK" ? <RockComponent /> :
                        computerPick === "PAPER" ? <PaperComponent /> :
                        computerPick === "SCISSORS" ? <ScissorsComponent /> :
                        <Blank />
                    }
                </div>
            </div>
            </div>
            <div className={`result-container-mobile ${!visible && "not-visible"}`}>
                <p className="result">
                    {
                        result === "WIN" ? "YOU WIN" :
                        result === "LOSE" ? "YOU LOSE" :
                        "DRAW"
                    }
                </p>
                <button className="play-again-button" onClick={playAgain}>PLAY AGAIN</button>
            </div>
        </div>
    )
}

export default RegularResultScreen;