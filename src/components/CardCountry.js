import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const CardCountry = ({name, flag, population, region,capital}) => {



    return (

        <Link to={`${name}`}>
            <Card style={{ width: '18rem', margin: '15px', cursor:'pointer' }}
            className="justify-content-md-center"
            >
            <Card.Img variant="top" style={{ width: '100%', height:'150px'}} src={flag} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    population: {population} <br />
                    region: {region} <br />
                    capital: {capital} <br />
                    </Card.Text>
                </Card.Body>
            </Card>        
        </Link>
    )
}

export default CardCountry;