import { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import JonathanImage from '../images/jonathan.jpg';
import domaineImage from '../images/domaine.jpeg';
import EricImage from '../images/eric.jpg';
import HunterImg from '../images/hunter.jpg'
import '../about.css';

class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
          <h1>About Our Team!</h1>
        <main>
          <Card id="jonathan"className='p-3' border="info" style={{ width: '25rem', height: '54rem', backgroundColor: 'black', color:'white'}}>
            <Card.Img style={{height:'40vh'}} class='jonny' src={JonathanImage}/>
            <Card.Body>
              <Card.Title style={{fontSize:'1.5vw'}}>Jonathan Staib</Card.Title>
              <Card.Text>Hello World! My name is Jonathan Staib and I am currently a student at Code Fellows in the 301 course. I am new to the field and I was previously working in the healthcare industry. I love coding, video games and magic the gathering. I can't wait to continue my journey in software development with all of you! If you want to chat coding, games or anime reach out to me on my <a href="https://www.linkedin.com/in/jonathan-staib-536220223/">Linkedin</a>.</Card.Text>
              <Button variant="info" a href="https://github.com/JonathanStaib">My GitHub</Button>
            </Card.Body>
          </Card>

          <Card className='p-3' border="info" style={{ width: '25rem', height: '54rem', backgroundColor: 'black', color:'white'}}>
          <Card.Img style={{height:'40vh'}} class='hunter' src={HunterImg}/>
            <Card.Body>
              <Card.Title style={{fontSize:'1.5vw'}}>Hunter Fehr</Card.Title>
              <Card.Text>Hello my name is Hunter Fehr, a proud Army veteran. I'm an active student within the Code Fellows program, aspiring to become a full stack developer. I am a fully dedicated individual that takes on new tasks head on and doesn't quit. The tech world will continue to grow, I want to on a personal and professional level to develop my skills as a developer to achieve overall growth in the niche of technology. I very much love the outdoors and exploring the wonderful area of Reno, NV.</Card.Text>
              <Button variant="info" a href="https://github.com/hmfehr">My GitHub</Button>
            </Card.Body>
          </Card>

          <Card className='p-3' border="info" style={{ width: '25rem', height: '54rem', backgroundColor: 'black', color:'white'}}>
            <Card.Img style={{height:'40vh'}} class='domaine' src={domaineImage}/>
            <Card.Body>
              <Card.Title style={{fontSize:'1.5vw'}}>Domaine Scully</Card.Title>
              <Card.Text>My Name is Domaine Scully. My current background is in Real Estate in which I have 12 years experience as a Real Estate Broker and also Residential/Commercial Mortgages in which I have 3 years experience as a mortgage loan originator. I have a Bachelor Of Science degree in Business Administration/Finance. I have always been intrigued and fascinated with technology, so I decided to embark on this new path and joined Code Fellows to purse my certificate as a Software Dev. I am excited to begin this new journey in Software Developer.</Card.Text>
              <Button variant="info" a href="https://github.com/dalexscully">My GitHub</Button>
            </Card.Body>
          </Card>

          <Card className='p-3' border="info" style={{ width: '25rem', height: '54rem', backgroundColor: 'black', color:'white'}}>
            <Card.Img style={{height:'40vh'}} class='eric' src={EricImage}/>
            <Card.Body>
              <Card.Title style={{fontSize:'1.5vw'}}>Eric Mungai</Card.Title>
              <Card.Text>My name is Eric Mungai Kinuthia, I am junior software developer looking to begin my professional career in the tech industry. I am proficient in the MERN stack and several UI libraries. Before I decided to change careers, I was working as a delivery driver for Amazon . Working there helped me learn how to work as a team and develop a growth mindset. I chose to transition into software development at this point in my life to equip myself with the technical know how and skills to be able to create software that makes people's lives easier. And most importantly to be able to do what I love for work.</Card.Text>
              <Button variant="info" a href="https://github.com/EricMungai97">My GitHub</Button>
            </Card.Body>
          </Card>
        </main>
      </>
    );
  }
}

export default About;