import React from "react";
import { Card, Container, CardDeck, CardImg, Button, Col, Row } from 'react-bootstrap';
import img1 from '../images/developerdesign.svg';
import img2 from '../images/responsivedesign.svg';
import img3 from '../images/innovativesolutions.svg';
import img4 from '../images/passion.svg';

const Summary = () => {
    const data = [
        {
          title: 'Development and Design',
          information:
            'I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.',
          key: 'Development',
          image: img1,
        },
        {
          title: 'Responsive Layouts',
          information:
            'media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.',
          key: 'Responsive',
          image: img2,
        },
        {
          title: 'Ideas and Solutions',
          information:
            'There are still many problems that exist in todays society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy to use programs, solutions, or products.',
          key: 'Ideas',
          image: img3,
        },
        {
            title: 'Passion and Dedication',
            information:
              'With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.',
            key: 'Passion',
            image: img4,
          },
      ];
    return (
        <section className="summary">
        <CardDeck>
        {data.map((ele) => {
          return (
            <Card key={ele.key}>
              <CardImg top src={ele.image}></CardImg>
              <Card.Title>{ele.title}</Card.Title>
              <Card.Text>{ele.information}</Card.Text>
            </Card>
          );
        })}
      </CardDeck>
      </section>
    )
}

export default Summary;



