import './BackButton.css';
import BackArrow from '../left-arrow.png';

const BackButton = () => {
    return (
        <button className="back__button">
            <img className='back__button__arrow' src={BackArrow}/>
            Back to Home
        </button>
    )
}

export default BackButton;