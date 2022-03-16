import {Link} from 'react-router-dom';
import Header from './Header';
import BackButton from './BackButton';
import './CountryRoute.css';


const CountryRoute = ({data, darkMode, chaningMode}) => {
    return (
        <div className={darkMode ? 'dark-mode' : 'normal-mode'}>
            <Header 
                darkMode={darkMode} chaningMode={chaningMode}
            />

            {console.log(data)}
            {
                data[0] && data[0].flag ?
                <div className='main__div'>
                    <div className='main__div__fag-link__div'>
                        <Link to='/'>
                            <BackButton />
                        </Link>
                        <img className='flag' src={data[0].flag} />                    
                    </div>
                    <div className='main__div_data'>
                        {
                            <div className='main__div_data__header-data'>
                                <h1 className='country__header'>{data[0].nativeName}</h1>
                                <div
                                    className='div_data__real_data_all'
                                >
                                    <div className='div_data__real_data_a'>
                                        <p><strong>Region:</strong> {data[0].region}</p>
                                        <p><strong>Sub Region:</strong> {data[0].subregion}</p>
                                        <p><strong>Population:</strong> {data[0].population}</p>
                                        <p><strong>Capital:</strong> {data[0].capital}</p>
                                    </div>
                                    <div className='div_data__real_data_b'>
                                        <p><strong>Top level Domain:</strong> {data[0].topLevelDomain[0]}</p>
                                        <p><strong>Currencies:</strong> {data[0].currencies.map(item => item.name)}</p>
                                        <p><strong>Languages:</strong> {data[0].languages.map(item => <p>{item.name}</p>)}</p>

                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div> 
                :
                <h1>Loading...</h1>
            }

        </div>
    )
}
export default CountryRoute;