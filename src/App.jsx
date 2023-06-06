import { useState, useRef } from "react";
import Header from "./jsx-components/Header";
import RegularVersion from "./jsx-components/game-screens/RegularVersion";
import LizardSpockVersion from "./jsx-components/game-screens/LizardSpockVersion";
import closeIcon from "./images/icon-close.svg";
import rule from "./images/image-rules.svg";
import bonusRule from "./images/image-rules-bonus.svg";

function App () {

    const dialogRef = useRef(null);
    const openDialog = (bool) => {
        bool ? dialogRef.current.showModal() : dialogRef.current.close();
    }

    const [ gameMode, setGameMode ] = useState(0);
    const [ score, setScore ] = useState(0);
    const [ scoreB, setScoreB ] = useState(0);

    const gameModeSwitcher = () => {
        gameMode ? setGameMode(0) : setGameMode(1);
    }
    
    const clearScores = () => {
        setScore(0);
        setScoreB(0);
    }

    return (
        <div className="new-body">
            <Header gameMode={gameMode} score={score} scoreB={scoreB} />
            <main>
                {
                    !gameMode ? 
                    <RegularVersion setScore={setScore} /> :
                    <LizardSpockVersion setScoreB={setScoreB} />
                }
            </main>
            <footer>
                <button className="footer-button" onClick={gameModeSwitcher}>SWITCH GAMEMODE</button>
                <button className="footer-button" onClick={clearScores}>CLEAR SCORES</button>
                <button className="footer-button" onClick={() => openDialog(true)}>RULES</button>
                <dialog ref={dialogRef}>
                    <div className="dialog-top">
                        <p>RULES</p>
                        <button className="close-dialog" onClick={() => openDialog(false)}>
                            <img src={closeIcon} alt="close icon" />
                        </button>
                    </div>
                    <div className="dialog-image-wrapper">
                        {
                            !gameMode ? <img src={rule} alt="rule map of rock-paper-scissor" /> :
                            <img src={bonusRule} alt={"rule map of rock-paper-scissor-lizard-spock"}/>
                        }
                    </div>
                </dialog>
            </footer>
        </div>
    )
}

export default App;