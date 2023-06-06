import Lizard from "../../images/icon-lizard.svg";

function LizardComponent () {
    
    return (
        <div className="lizard-icon">
            <div className="big-icon-wrapper">
                <img className="big-icon" src={Lizard} alt="Lizard hand symbol" />
            </div>
        </div>
    )
}

export default LizardComponent;