import { useState } from "react";
import Paper from "../../images/icon-paper.svg";
import Scissors from "../../images/icon-scissors.svg";
import Rock from "../../images/icon-rock.svg";
import RegularResultScreen from "./RegularResultScreen";

function RegularVersion ({ setScore }) {

    const [ isHandSelected, setIsHandSelected ] = useState(false);
    const [ pick, setPick ] = useState("");
    const [ computerPick, setComputerPick ] = useState("");

    const picks = ["ROCK", "PAPER", "SCISSORS"];

    const pickHandle = (pick) => {
        let pickHand = picks[Math.floor(Math.random() * 3)];
        setPick(pick);
        setIsHandSelected(true);
        setTimeout(() => {
            setComputerPick(pickHand);
        }, 1000);
    }

    return (
        <div>
            {
                !isHandSelected ? 
                <div className="button-container">
                    <button className="throw-button paper-button" onClick={() => pickHandle("PAPER")} >
                        <div className="icon-wrapper">
                            <img src={Paper} alt="paper hand symbol" />
                        </div>
                    </button>
                    <button className="throw-button scissors-button" onClick={() => pickHandle("SCISSORS")}>
                        <div className="icon-wrapper">
                            <img src={Scissors} alt="scissor hand symbol" />
                        </div>
                    </button>
                    <button className="throw-button rock-button" onClick={() => pickHandle("ROCK")}>
                        <div className="icon-wrapper">
                            <img src={Rock} alt="rock hand symbol" />
                        </div>
                    </button>
                </div> :
                <RegularResultScreen setScore={setScore} setIsHandSelected={setIsHandSelected} setPick={setPick} setComputerPick={setComputerPick} pick={pick} computerPick={computerPick} />
            }
        </div>
    )
}

export default RegularVersion;