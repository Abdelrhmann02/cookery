import React from 'react'
import {Card,Row,Col} from 'react-bootstrap';
import {FcAlarmClock} from 'react-icons/fc';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./category.scss"
import { Link } from 'react-router-dom';

const ShowRecipes = ({data}) => {
return (
    <div>
        <div className='wrapper_menu'>
            <br/>
            <Row xs={1} md={4} className="g-3">
            {data.map((item) => {
                return (
                <Col>
                    <Card key={item._id} style={{ width: "18rem" }}>
                        <Link to={'/recipe/'+ item.name}>
                            <Card.Img variant="top" src={item.photo_location} />
                        </Link>
                            <Card.Body>
                            <div className="title-container">
                                <Card.Title>{item.name} </Card.Title>
                                <p><FcAlarmClock/> {item.prep_time + item.cook_time} minutes</p>
                            </div>
                            </Card.Body>
                        
                    </Card>
                </Col>
                );
            })}
            </Row>  
        </div>
    </div>
)
}

export default ShowRecipes;

        
