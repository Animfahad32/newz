import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const News = (props) => {

        const {author,title,description,url, urlToImage} = props.news
    return (
        <div>
         <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button href={url} target="_blank" variant="success" >Read More</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default News;