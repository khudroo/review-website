import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <CardGroup className="CardDesign">

                <Card className='CardStyle'>
                     <Card.Body>
                     <Card.Img className='logoImg' variant="top" width='50px'  src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Eucalyp-Deus_High_School.png" />
                    <Card.Title>Bavaian Internation School</Card.Title>
                    <Card.Text>
                        <span>(00) 123 456 789</span>
                        <p>hello@bavaian.com</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='CardStyle'>
                     <Card.Body>
                    <Card.Title>FEATURED </Card.Title>
                    <Card.Text>
                        <p>Education Board</p>
                        <p>Ministry of Education</p>
                        <p>Directorate of Secondary & Higher Education</p>
                        <p>NCTB</p>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='CardStyle'>
                    <Card.Body>
                    <Card.Title>Our Class</Card.Title>
                    <Card.Text>
                        <p>Play</p>
                        <p>Nursery</p>
                        <p>Primary</p>
                        <p>Secondary</p>
                    </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='CardStyle'>
                    <Card.Body>
                    <Card.Title>Our Aim</Card.Title>
                    <Card.Text>
                    We are committed to the realization of students’ potential through a holistic program, instructional differentiation, and recognized international standards of achievement.
                    </Card.Text>
                    </Card.Body>

                </Card>
                </CardGroup>
                <div>
                    <p className="text-center p-5">Copyright &copy; Bavaian Internation School.  Developed by <a href="https://github.com/khudroo"> Md. Jahirul Islam</a></p>
                </div>
        </div>
    );
};

export default Footer;