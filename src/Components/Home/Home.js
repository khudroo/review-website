import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [courses, setCourses] = useState([]);
//  Use fackdata
    useEffect(() => {
        fetch('./Fackdata.json')
        .then(res => res.json())
        .then(data =>setCourses(data))
    }
    ,[]);
    

    return (
        <Container>
            {/* Head section */}
            <div className="sectionPadding">
                <h1 className='headline'>Bavaian Internation School</h1>
                <p className='subHeadline'>Believe Inspire Succeed.</p>
                <p className='paraHeadline'>The history of nursery schools is intimately related to the history of mass schooling. Provision of nursery schools and other institutions for the education and care of young children (generally under the age of six) came relatively late in the development of school systems. </p>
            </div>
    
        {/* Card Section use dynamic data*/}
            <div className="sectionDiv">
                <h3 className="sectionDivTitle">Our Services </h3>
            {/* card dynamic post  */}
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
                            <NavLink className='aStyle' to="/Services" activeStyle={{ color: "Gray"}}><Button variant="primary">Admission Now</Button></NavLink>
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        </Col>
                    ))
                }

                </Row>
                <div>
                {/* Carousel Section */}
                <h1 className="p-5 fw-bold">All Arrangements are For Yours</h1>
                
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
                        alt="Enjoy Every Class"
                        />
                        <Carousel.Caption>
                        <h2>Enjoy Every Class</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1628471047004-f4fe9a1d9e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80"
                        alt="Safe vehicle movement"
                        />
                        <Carousel.Caption>
                        <h2>Safe vehicle movement</h2>
                        <p>Every moment of your education life is important so with that we prioritize your safe movement</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
                        alt="The joy of learning is a dense moment"
                        />
                        <Carousel.Caption>
                        <h2>The joy of learning is a dense moment</h2>
                        <p>We provide happiness to our education system through giving. We are committed to fulfilling your mental fatigue.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </Container>
        
    );
};

export default Home;