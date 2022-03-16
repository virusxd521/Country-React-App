import logo from '../magnifying-glass.svg';
import './SearchBar.css';

const SearchBar = ({selectingShow, searchingShow}) => {
    return (
        <div className='search-bar'>
        <label className='input-search__label'>
            <img className="img-mag" src={logo} />  
            <input className='input-search' type="text"     placeholder="Search for a country..."
            onChange={searchingShow}
            />
        </label>
        <select 
            className='search__select'
            onChange={selectingShow}
            defaultValue={'DEFAULT'}
            >
            <option value="Filter" >Filter by Region</option>
           
            <option value="Africa" >Africa</option>
            <option value="America" >America</option>
            <option value="Asia" >Asia</option>
            <option value="Europe" >Europe</option>
            <option value="Oceania" >Oceania</option>
        </select>
        </div>
        
        
    )
}
export default SearchBar;

