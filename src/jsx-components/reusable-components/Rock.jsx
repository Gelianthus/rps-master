import Rock from "../../images/icon-rock.svg";

function RockComponent () {
    
    return (
        <div className="rock-icon">
            <div className="big-icon-wrapper">
                <img className="big-icon" src={Rock} alt="Rock hand symbol" />
            </div>
        </div>
    )
}

export default RockComponent;