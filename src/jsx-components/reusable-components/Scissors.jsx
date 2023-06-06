import Scissors from "../../images/icon-scissors.svg";

function ScissorsComponent () {
    
    return (
        <div className="scissors-icon">
            <div className="big-icon-wrapper">
                <img className="big-icon" src={Scissors} alt="Scissors hand symbol" />
            </div>
        </div>
    )
}

export default ScissorsComponent;