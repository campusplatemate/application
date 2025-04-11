import { Col, Container, Image, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-4">
      <Container className="">
        <Row>
          <Col className="align-middle text-center">
            <Image className="p-3" src="/next.svg" width={300} alt="logo" />
            <h1 className="text-center p-3">Campus Plate Mate</h1>
          </Col>
        </Row>
        <Row className="align-middle text-center">
          <Col xs={4}>
            <h2 className="text-start">Our Goal</h2>
            <p className="text-start">
              We aim to reduce food waste island wide by providing a secure
              platform for the UH Manoa community to share unused or unwanted food items,
              promoting sustainability even beyond our campus.
            </p>
          </Col>

          <Col xs={4}>
            <h2 className="text-center">Sharing Food</h2>
            <p>
              With your login, list your unwanted food on the dashboard. Keep an eye on notifications of other users
              claiming your food and arranging a pickup. Earn points for each food item you list that gets claimed!
            </p>
          </Col>

          <Col xs={4} className="text-end">
            <h2>Claiming Food</h2>
            <p>
              With your login, scroll through the dashboard to find any listed food products you&apos;re interested in.
              Claim the food and arrange a pickup with the user who listed it. Earn points for each food item you claim!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  </main>
);

export default Home;
