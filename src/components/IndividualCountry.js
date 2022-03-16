import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CountryRoute from "./CountryRoute";
import BackButton from "./BackButton";


const IndividualCountry = ({darkMode, chaningMode}) => {

    // setting state ofdata from API
    const [apiData, setApiData] = useState([]);

    // created a state for errors
    const [apiError, setApiError] = useState(false);

    

    // With the useParams hook we can access use the Object by assigning it to a Variable
    // That variable becomes an Object which hold the name of the variable 
    // and the param (which we defined in the Route) will be the name of the key or attribute
    // So you can think of it as a JS Object
    const {country} = useParams();
    const url = `https://restcountries.com/v2/name/${country}`;

    const fetchingData = async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            try{
                if(!!data.status){
                    throw new Error('Required');
                } 
                setApiData(data);
            } catch  {
                setApiError(true);
            }            
    }

    // Will call the api of the specific country 
    useEffect(() => {
        fetchingData(url);        
    }, [])

    return (
        <>
            {
                apiError 
                ?
                    <>
                        <h1>Something Went Wrong</h1> 
                        <Link to='/'>
                            <BackButton />
                        </Link>
                    </>
                :
                <CountryRoute 
                data={apiData} 
                    darkMode={darkMode}
                    chaningMode={chaningMode}
                />
            }
        </>
    )
}

export default IndividualCountry;
