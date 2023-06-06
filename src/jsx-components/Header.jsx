import logo from "../images/logo.svg";
import logoBonus from "../images/logo-bonus.svg";

function Header ({ gameMode, score, scoreB }) {

    return (
        <header>
            <div className="logo-wrapper">
                {
                    gameMode ? <img className="logo" src={logoBonus} alt=" rock-paper-scissors-lizard-spock logo" /> :
                    <img className="logo" src={logo} alt="rock-paper-scissors logo" />
                }
            </div>
            <div className="score">
                <p className="score-header">SCORE</p>
                {
                    gameMode ? <p className="score-body-v2">{scoreB}</p> :
                    <p className="score-body">{score}</p>    
                }
            </div>
        </header>
    )
}

export default Header;