import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./Fackdata3.json')
        .then(res => res.json())
        .then(data =>setServices(data))
    }
    ,[]);
    return (
        // Services Section
        <Container>
            <div>
                <h1 className="p-5 font-bold">Our Services</h1>
            </div>
            <div>
                <Row xs={2} md={3} className="g-4">
            {
                services.map(service=>(
                            <Col>
                            {/* Here is all card dynamic section */}
                            <Card>
                                <Card.Img variant="top" src={service.ServiceUrl} />
                                <Card.Body>
                                <Card.Title>{service.ServiceTitle}</Card.Title>
                                <Card.Text>Publish Date:{service.ServiceDate} </Card.Text>
                                <Card.Text>Type: {service.ServiceType} </Card.Text>
                                <Card.Text>
                                {service.ServiceDescription}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary">Visit here</Button>
                                </Card.Footer>
                            </Card>
                            </Col>
                        ))}
                </Row>
            </div>  
        
        </Container>
    );
};

export default Services;