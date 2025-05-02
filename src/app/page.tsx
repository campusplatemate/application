'use client';

import { Image, Card, Col, Container, Row } from 'react-bootstrap';
import { lato, lexend } from '@/fonts';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-4">
      <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
        <Row className="w-100 d-flex align-items-center justify-content-center px-5">
          <Col md={6}>
            <Card className="bg-transparent border-0">
              <Card.Title className={`${lexend.className} display-4`}>Campus Plate Mate</Card.Title>
              <Card.Body className={`${lato.className} text-start fs-5`}>
                Welcome to Campus Plate Mate, a platform designed to help the UH Manoa community reduce food waste by
                sharing food items. Our goal is to create a sustainable environment by connecting individuals who have
                excess food with those in need. By using our platform, you can help reduce food waste and promote
                sustainability on campus. Join us in our mission to create a more sustainable future for our community.
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="text-center">
            <Image src="/our-goal.png" alt="Our Goal" className="img-fluid" style={{ maxHeight: '500px' }} />
          </Col>
        </Row>
      </Container>

      <Container className="">
        <Row className="align-middle text-center">
          <Row className="d-flex justify-content-center align-items-center gap-6 py-5 my-4">
            <Col xs={6}>
              <Container>
                <Image src="/goals.png" alt="Our Goal" className="img-fluid w-100" />
              </Container>
            </Col>

            <Col xs={6}>
              <Container>
                <Card className="h-100 bg-transparent border-0">
                  <Card.Title className={`${lexend.className}`}>Our Goal</Card.Title>
                  <Card.Body className={lato.className}>
                    We aim to reduce food waste island wide by providing a secure platform for the UH Manoa community to
                    share unused or unwanted food items, promoting sustainability even beyond our campus.
                  </Card.Body>
                </Card>
                <p className="text-start" />
              </Container>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center align-items-center gap-6 py-5 my-4">
            <Col xs={6}>
              <Container>
                <Card className="h-100 bg-transparent border-0">
                  <Card.Title className={`${lexend.className}`}>Sharing Food</Card.Title>
                  <Card.Body className={lato.className}>
                    With your login, list your unwanted food on the dashboard. Keep an eye on notifications of other
                    users claiming your food and arranging a pickup. Earn points for each food item you list that gets
                    claimed!
                  </Card.Body>
                </Card>
                <p className="text-start" />
              </Container>
            </Col>

            <Col xs={6}>
              <Container>
                <Image src="/sharing-food.png" alt="Our Goal" className="img-fluid w-100" />
              </Container>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center align-items-center gap-6 py-5 my-4">
            <Col xs={6}>
              <Container>
                <Image src="/claiming-food.png" alt="Our Goal" className="img-fluid w-100" />
              </Container>
            </Col>

            <Col xs={6}>
              <Container>
                <Card className="h-100 bg-transparent border-0">
                  <Card.Title className={`${lexend.className}`}>Claiming Food</Card.Title>
                  <Card.Body className={lato.className}>
                    With your login, scroll through the dashboard to find any listed food products you&apos;re
                    interested in. Claim the food and arrange a pickup with the user who listed it. Earn points for each
                    food item you claim!
                  </Card.Body>
                </Card>
                <p className="text-start" />
              </Container>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  </main>
);

export default Home;
