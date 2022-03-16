import './Header.css';




const Header = ({chaningMode, darkMode}) => {
    
    return (
        <div className={darkMode ? 'header_dark_mode': 'header_sun_mode'}  
        
        >
            <h2
            className={darkMode ? 'header__title__dark': 'header__title__sun'}
            >Where in the world?</h2>
            
            <div  
                className='dark-mode__div'
                onClick={chaningMode} 
            >
                {
                darkMode ?
                <div className="mode-changing">
                <p className='dark-mode__div__paragraph'>
                    Dark Mode
                </p>
                <span className='dark__mode__status' >
                    &#127769;</span>    
                
                
                </div>
                :
                <div className='mode-changing'>
                <p
                className='normal-mode__div__paragraph'
                >
                    Normal Mode
                </p>
                    <span className='normal__mode__status'>&#9728;&#65039;</span>      
                </div>
                }
            </div>

        </div>
    )
}

export default Header;