import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
function Contact() {
  const contactInfo = [
    {
      title: 'Reaching out to me',
      subInformation:
        'Don’t be afraid to contact me! I’m happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXXX.',
      contactTitle: 'Contact Information',
      paraX: 'XXXX',
      number: '650-445-7747',
      email: 'justin@gmail.com',
    },
  ];
  return (
    <Container fluid className='contact'>
      <div className='contact-header'>
        <h1>Contact</h1>
        <h4>“xxxx”</h4>
        <h4>“xxxx”</h4>
      </div>
      <div className='contact-instructions'>
        <Row>
          <Col>
            {contactInfo.map((ele) => {
              return (
                <div>
                  <h2>{ele.title}</h2>
                  <p>{ele.subInformation}</p>
                  <br />
                  <h2>{ele.contactTitle}</h2>
                  <p>{ele.paraX}</p>
                  <p>{ele.paraX}</p>
                  <p>{ele.number}</p>
                  <p>{ele.email}</p>
                </div>
              );
            })}
          </Col>
          <Col>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridName'>
                  <Form.Label>First</Form.Label>
                  <Form.Control type='name' placeholder='FirstName' />
                </Form.Group>
                <Form.Group as={Col} controlId='formGridName'>
                  <Form.Label>Last</Form.Label>
                  <Form.Control type='name' placeholder='LastName' />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridCity'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>
              <Button variant='outline-secondary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Contact;