import Button from 'react-bootstrap/Button';
import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Card, img } from 'react-bootstrap';
import './Blog.css'

// Blog Section

const Blog = () => {

    const [newses, setNewses] = useState([]);
 
    useEffect(() => {
        fetch('./Fackdata2.json')
        .then(res => res.json())
        .then(data =>setNewses(data))
    }
    ,[]);

    return (
        <Container>
            <div>
                <h1 className="p-5">Education News</h1>
            </div>
           <div>

            {/* Here news all dynamic inclue  */}
            {
                newses.map(news => 
                <Card>
                        
                    <Card.Body>
                    <img className="cardImage" src={news.url} alt="" />

                            <Card.Title className="cardIitle">{news.title}</Card.Title>
                            <Card.Text className="CardWidth">
                            {news.description}
                            </Card.Text>
                            <Button variant="primary">Read More....</Button>
                    </Card.Body>
                </Card>
                )
            }
            
           </div>
        </Container>
    );
};

export default Blog;