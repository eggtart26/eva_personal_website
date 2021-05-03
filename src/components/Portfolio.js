import React from 'react';
import { Card, Container, CardDeck, CardImg, Button } from 'react-bootstrap';
import img1 from '../images/luvtalklogo.png';
import img2 from '../images/mlbproject.png';
import img3 from '../images/flower.png';

function Portfolio() {
  const data = [
    {
      title: 'LUV TALK Website',
      information:
        'Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.',
      key: 'Website',
      image: img1,
    },
    {
      title: 'Personal Website',
      information:
        'Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.',
      key: 'Personal',
      image: img2,
    },
    {
      title: 'Strike Zone Analysis',
      information:
        'Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.',
      key: 'Analytics',
      image: img3,
    },
  ];
  return (
    <section className='portfolio'>
      <div className='title'>
        <h1>Projects and Portfolio</h1>
        <h3>Sharing my endeavors and passions...</h3>
      </div>
      <div>
        <CardDeck className='cards-parent'>
          {data.map((ele) => {
            return (
              <Card key={ele.key}>
                <CardImg top src={ele.image}></CardImg>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>{ele.information}</Card.Text>
                <Button>More Information</Button>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    </section>
  );
}
export default Portfolio;