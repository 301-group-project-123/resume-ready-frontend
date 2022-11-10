import { Component } from 'react';
import {Card} from 'react-bootstrap';
import JonathanImage from '../images/jonathan.jpg';
import domaineImage from '../images/domaine.jpeg';
import '../about.css';

class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <main>
          <Card style={{ width: '18rem' }}>
            <Card.Img class='jonny' src={JonathanImage} a href="https://github.com/JonathanStaib"/>
            <Card.Body>
              <Card.Title>Jonathan Staib</Card.Title>
              <Card.Text>Hello</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img class='hunter' src={''} a href="https://github.com/hmfehr" />
            <Card.Body>
              <Card.Title>Hunter Fehr</Card.Title>
              <Card.Text>Hello</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img class='domaine' src={domaineImage} a href="https://github.com/dalexscully" />
            <Card.Body>
              <Card.Title>Domaine Scully</Card.Title>
              <Card.Text>Hello</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img class='eric' src={''} a href="https://github.com/EricMungai97" />
            <Card.Body>
              <Card.Title>Eric Mungai</Card.Title>
              <Card.Text>Hello</Card.Text>
            </Card.Body>
          </Card>

        </main>
      </>
    );
  }
}

export default About;