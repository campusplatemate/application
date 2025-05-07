import { Col, Container, Row } from 'react-bootstrap';
import { lato, lexend } from '@/fonts';

const Confirmation = () => (
  <main>
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={4} className="text-center">
          <h2>
            <p className={`${lexend.className}`}>Your order is confirmed!</p>
          </h2>
          <h5>
            <p className={`${lato.className}`}>We will be in touch shortly with reward pickup information.</p>
          </h5>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Confirmation;
