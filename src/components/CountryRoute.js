import {Link} from 'react-router-dom';
import Header from './Header';
import BackButton from './BackButton';
import './CountryRoute.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


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
                    <div className='main__div__flag-link__div'>
                        <Link className='back__button__a-tag' to='/'>
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
                                        <p><strong>Borders:</strong></p>
                                        <ul className="borders-box"> 
                                            {
                                            !!data[0].borders ?
                                            data[0].borders.map((item, index) =>{
                                                return <li key={index}>{item}</li>  
                                            })
                                        : <li className='no__borders'>No borders were found</li>
                                        }
                                        </ul>
                                    </div>
                                    <div className='div_data__real_data_b'>
                                        <p><strong>Top level Domain:</strong> {data[0].topLevelDomain[0]}</p>
                                        <p><strong>Currencies:</strong> {
                                        !!data[0].currencies ? 
                                        data[0].currencies.map((item, index) => <span key={index}>
                                            {item.name}
                                        </span>)
                                            :
                                             <span className='no__borders'> No currencies were found</span>
                                        }</p>
                                        <p><strong>Languages:</strong>                                            
                                        </p>
                                        {data[0].languages.map((item, index) => <>
                                        <span key={index +5}>{item.name}</span> 
                                        </>)}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div> 
                :
                    <Card style={{ width: '40rem', height: '20rem', borderRadius: '10px' , margin: ' 7% auto' }}>
                        <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button variant="primary" xs={6} />
                        </Card.Body>
                    </Card>                 
            }

        </div>
    )
}
export default CountryRoute;