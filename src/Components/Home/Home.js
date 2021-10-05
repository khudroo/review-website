import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {

    const [courses, setCourses] = useState([]);
 
    useEffect(() => {
        fetch('./Fackdata.json')
        .then(res => res.json())
        .then(data =>setCourses(data))
    }
    ,[]);
    

    return (
        <Container>
            <div className="sectionPadding">
                <h1 className='headline'>Bavaian Internation School</h1>
                <p className='subHeadline'>Believe Inspire Succeed.</p>
                <p className='paraHeadline'>The history of nursery schools is intimately related to the history of mass schooling. Provision of nursery schools and other institutions for the education and care of young children (generally under the age of six) came relatively late in the development of school systems. </p>
            </div>
    
            <div className="sectionDiv">
                <h3 className="sectionDivTitle">Our Services </h3>

                <Row xs={2} className="g-4">
                {
                    courses.map(course=>(
                        <Col>
                        <Card className="cardStyle">
                            <Card.Img  variant="top" src={course.url}/>
                            <Card.Body>
                            <Card.Title className="cardTitle">{course.title}</Card.Title>
                            <Card.Text>
                                <p className="description">{course.description} </p>
                                <h4 className="class">Class: {course.class}</h4>
                                <span className="courseFee">Course Fee: {course.courseFee} </span>
                            </Card.Text>
                            <Card.Text>
                                <Button variant="primary">Admission Now</Button>
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        </Col>
                    ))
                }

                </Row>
            </div>
        </Container>
        
    );
};

export default Home;