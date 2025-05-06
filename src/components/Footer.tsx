import { Col, Container, Row } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import { lato, lexend } from '@/fonts';
import CreateFeedbackForm from './CreateFeedbackForm';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 text-light" style={{ backgroundColor: '#d3d3d3' }}>
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <p className="mb-0 text-black">
              <strong className={`${lexend.className}`}>
                Campus Plate Mate is proudly developed by Kimi Li, Lou Rae Robles,
                <br />
                Ka&apos;ili Benavente, Ruhi Pirnia, Naydel Espiritu, and Jaylin Morimoto.
              </strong>
              <br />
              <br />
              <small className={`${lato.className} text-start x-small`}>
                ICS 314 Software Engineering
                <br />
                University of Hawaii at Manoa
              </small>
              <br />
              <br />
              <a href="https://github.com/campusplatemate/application" target="_blank" rel="noopener noreferrer">
                <Github className="github-icon" />
              </a>
            </p>
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <div>
              <CreateFeedbackForm />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
