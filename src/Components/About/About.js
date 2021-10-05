import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './About.css'


const About = () => {
    return (
    
        <Container>
            
            <div>
            <h1 className='p-5 fw-bold'>About Us</h1>
                <img src="https://www.graduateschool.edu/sites/default/files/history_0.jpg" alt="" />
            </div>
            <div>
                <h2 className='p-5 fw-bold'>Who We Are</h2>
                <p> An independent, nonprofit educational institution based in Washington, DC, Graduate School USA offers workforce training and services across the U.S. and around the world. We are a leading provider of professional development and training courses for the federal government and the private sector, serving organizations and individuals with programs designed to support organizational missions, career and occupational development, and the personal ambitions of adult learners.</p>
                <div>
                    <Button variant="primary">Our Leadership Team</Button>
                </div>
            </div>
            <div>
                <h2 className='p-5 fw-bold'>Our History</h2>
                <p className='text-left'> The first U.S. organization founded with the mission of providing continuing education to federal employees, we opened our doors in October 1921 as the USDA Graduate School. We were established by the Secretary of Agriculture with the express purpose of offering professional development courses for USDA scientists, most of whom had graduate degrees—hence the term “Graduate School.” From the beginning, our focus was on developing individuals and making government more efficient and effective.</p>
                <p>In the years after World War I, more organizations began to recognize the value of workforce development and by 1935 School enrollment had expanded beyond the USDA to other agencies. Since then, we have grown to serve an audience that includes state and local governments, the private sector, and individuals in our local community.</p>
                <p>Shortly before our 90th anniversary, the School moved from our parent agency to become an independent, nonprofit organization known as Graduate School USA. We also acquired most of the assets of Southeastern University, enhancing our portfolio through the creation of academic and community workforce development programs designed to prepare local residents for fast-growing careers and further professional development.</p>
                <p>Today, we are still dedicated to helping government become more efficient and effective, and to supporting working adults as they achieve occupational success and personal growth. Whether we’re helping public sector professionals do their jobs more effectively, or helping members of the community better position themselves to enter the workforce or move ahead in their careers, our mission remains consistent.</p>
                <div>
                    <Button variant="primary">Learn More About Our History</Button>
                </div>
            </div>
        </Container>
    );
};

export default About;