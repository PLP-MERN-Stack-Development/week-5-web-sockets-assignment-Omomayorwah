import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function BlogCard({ featuredImage, title, content, category }) {
    return (
            <Card>
              <Card.Img variant="top" src={featuredImage} style={{height: "40vh"}} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                 <Badge>{category}</Badge>
                <Card.Text>
                  {content}
                </Card.Text>
              </Card.Body>
            </Card>
    )
}