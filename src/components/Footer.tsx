import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container>
      <Col className="text-center">
        Campus Plate Mate
        <br />
        Made by Kimi Qi, Lou Rae Robles, Ka&apos;ili Benavente, Ruhi Pirnia, Naydel Espiritu, Jaylin Morimoto.
        <br />
        ICS 314 Software Engineering, University of Hawaii at Manoa.
      </Col>
    </Container>
  </footer>
);

export default Footer;
