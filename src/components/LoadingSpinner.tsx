import { Container, Row, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => (
  <Container className="mt-5">
    <Row className="d-flex justify-content-center">
      <Spinner animation="border" variant="light" />
      <p className="text-center mt-2"> Loading...</p>
    </Row>
  </Container>
);

export default LoadingSpinner;
