import CardCountry from "./CardCountry";
import './Cards.css';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";


const Cards = ({apiRandomized, data, loadingState, filteringData}) => {
    // Providing a random range of 8 items
    
    // Demi Array so i will be able to loop through the loading boxes
    
    const loading_array = [0,1,2,3,4,5,6,7];
    const [fullData, setFullData] = useState(apiRandomized);



    useEffect(() => {
        setFullData(apiRandomized);
    }, [apiRandomized])

    useEffect(() => {
        !!filteringData ? setFullData(data) : setFullData(apiRandomized)
    }, [filteringData])

    // useEffect(() => {
    //     // console.log(filteringData);
    //     setFullData(data);
    // }, [filteringData])
    

    return (
        <div className="cards-div">
            
            {
            filteringData !== '' ?
                fullData.map((item, index) => {
                    
                    if(!!item.name.common){
                        if(item.name.common.includes(filteringData)){
                            return <CardCountry 
                                key={index} 
                                name={item.name.common || item.name}  
                                flag={item.flags.svg}
                                population={item.population}
                                region={item.region}
                                capital={item.capital}
                            /> 
                        } else {
                            return 
                        }
                    } else if(item.name.includes(filteringData)){
                        
                        return  <CardCountry 
                            key={index} 
                            name={item.name.common || item.name}  
                            flag={item.flags.svg}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                        />
                    } else {
                        return 
                        
                    }
                })
            : 
                fullData.length > 0 && !loadingState  ? 
                
                    fullData.map((item, index) => {
                        
                        return <CardCountry 
                            key={index} 
                            name={item.name.common || item.name}  
                            flag={item.flags.png}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                        />
                    }) 
            :
                loading_array.map((item, index) => {
                    return <Card key={index} style={{ width: '20rem', height: '20rem', borderRadius: '10px' , margin: '50px' }}>
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
                })
            }
        </div>
    )
}

export default Cards;




