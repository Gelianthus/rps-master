import { useState, useEffect } from "react";
import Paper from "../../images/icon-paper.svg";
import Scissors from "../../images/icon-scissors.svg";
import Rock from "../../images/icon-rock.svg";
import Lizard from "../../images/icon-lizard.svg";
import Spock from "../../images/icon-spock.svg";
import LizardSpockResultScreen from "./LizardSpockResultScreen";

function LizardSpockVersion ({ setScoreB }) {

    const [ isHandSelected, setIsHandSelected ] = useState(false);
    const [ pick, setPick ] = useState("");
    const [ computerPick, setComputerPick ] = useState("");

    const picks = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

    const pickHandle = (pick) => {
        let pickHand = picks[Math.floor(Math.random() * 5)];
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
                <div className="button-container-v2">
                    <button className="throw-button-v2 paper-button-v2" onClick={() => pickHandle("PAPER")} >
                        <div className="icon-wrapper-v2">
                            <img src={Paper} alt="paper hand symbol" />
                        </div>
                    </button>
                    <button className="throw-button-v2 scissors-button-v2" onClick={() => pickHandle("SCISSORS")}>
                        <div className="icon-wrapper-v2">
                            <img src={Scissors} alt="scissor hand symbol" />
                        </div>
                    </button>
                    <button className="throw-button-v2 rock-button-v2" onClick={() => pickHandle("ROCK")}>
                        <div className="icon-wrapper-v2">
                            <img src={Rock} alt="rock hand symbol" />
                        </div>
                    </button>
                    <button className="throw-button-v2 spock-button" onClick={() => pickHandle("SPOCK")}>
                        <div className="icon-wrapper-v2">
                            <img src={Spock} alt="spock hand symbol" />
                        </div>
                    </button>
                    <button className="throw-button-v2 lizard-button" onClick={() => pickHandle("LIZARD")}>
                        <div className="icon-wrapper-v2">
                            <img src={Lizard} alt="lizard hand symbol" />
                        </div>
                    </button>                    
                </div> :
                <LizardSpockResultScreen setScoreB={setScoreB} setIsHandSelected={setIsHandSelected} setPick={setPick} setComputerPick={setComputerPick} pick={pick} computerPick={computerPick} />
            }
        </div>
    )
}

export default LizardSpockVersion;