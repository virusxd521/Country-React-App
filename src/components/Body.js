import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Cards from './Cards';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import './Body.css';



const Body = ({chaningMode, darkMode}) => {

    const [apiData, setApiData] = useState([]);

    // randomized Data
    const [apiRandomized, setApiRandomized] = useState([]);

    // Loading state for a loader
    const [loading, setLoading] = useState(true);
    // The state of the select menu values
    const [regionData, setRegionData] = useState("Filter");
    // State of the input searching elment
    const [searchInput, setsearchInput] = useState("");

    const range = (lengthMaxNumber) => {
        const minNumber = Math.floor(Math.random() * lengthMaxNumber);
        let rangeArr = [minNumber, minNumber + 8];
        return rangeArr;
    }

    // API URL For a specific region
    const apiRegion =  `https://restcountries.com/v3.1/region/${regionData}`;

    // API URL For all countries
    const api = `https://restcountries.com/v2/all`; 

    const settingAllData = (data, randomized, settingData) => {
        if(settingData === setApiData){
            settingData(data);
        } else if(settingData === setApiRandomized){
            settingData(randomized);
        }
    }

    const fetchingData = async (apiUrl, settingData) => {
        setLoading(true);
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data.status);
        let randomized = [];
        if(data.status !== 404){
            randomized = await data.slice(...range(data.length -7)) 
        } 
        settingAllData(data, randomized, settingData);
        setLoading(false);
    }

    // Use effects to deal with APi data
    useEffect(() => {
        fetchingData(api, setApiData)
        fetchingData(api, setApiRandomized)
    }, [])
    
    useEffect(() => {
        if(regionData === 'Filter'){
            fetchingData(api, setApiRandomized)
            fetchingData(api, setApiData)
        } else{
            fetchingData(apiRegion, setApiRandomized)
            fetchingData(apiRegion, setApiData)
        }

        console.log(apiRandomized);    
    }, [regionData])

    
    // Select calling this function on change
    const selectingData = e => {
        e.preventDefault();
        console.log(e.target.value);
        setRegionData(e.target.value);
    }

    // on input change event handling
    const searchingForData  = e =>{
        e.preventDefault();
        console.log(e.target.value);
        setsearchInput(e.target.value);
    }
    
    return (
        <div className={darkMode ? 'dark-mode' : 'normal-mode'}>
            <Header darkMode={darkMode} chaningMode={chaningMode} />
            <Container>
                <SearchBar searchingShow={searchingForData} selectingShow={selectingData} />
                <Cards filteringData={searchInput} loadingState={loading}  data={apiData} 
                apiRandomized={apiRandomized}
                
                />
            </Container>
        </div>
    )
}

export default Body;