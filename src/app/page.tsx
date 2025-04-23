'use client';

import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { archivo, lato, lexend } from '@/fonts';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-4">
      <Container className="">
        <Row>
          <Col className="align-middle text-center">
            <Image className="p-3" src="/cpm-logo.png" width={300} alt="logo" />
            <h1 className={`${archivo.className} text-center py-3`}>Campus Plate Mate</h1>
          </Col>
        </Row>
        <Row className="align-middle text-center">
          <Col xs={4}>
            <Container>
              <Card className="h-100">
                <Card.Title className={`${lexend.className} pt-3`}>Our Goal</Card.Title>
                <Card.Body className={lato.className}>
                  We aim to reduce food waste island wide by providing a secure
                  platform for the UH Manoa community to share unused or unwanted food items,
                  promoting sustainability even beyond our campus.
                </Card.Body>
              </Card>
              <p className="text-start" />
            </Container>
          </Col>

          <Col xs={4}>
            <Container>
              <Card className="h-100">
                <Card.Title className={`${lexend.className} pt-3`}>Sharing Food</Card.Title>
                <Card.Body className={lato.className}>
                  With your login, list your unwanted food on the dashboard. Keep an eye on notifications of other users
                  claiming your food and arranging a pickup. Earn points for each food item you list that gets claimed!
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col xs={4} className="text-center">
            <Container>
              <Card className="h-100">
                <Card.Title className={`${lexend.className} pt-3`}>Claiming Food</Card.Title>
                <Card.Body className={lato.className}>
                  With your login, scroll through the dashboard to find any listed food products you&apos;re
                  interested in.
                  Claim the food and arrange a pickup
                  with the user who listed it. Earn points for each food item you claim!
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  </main>
);

export default Home;
