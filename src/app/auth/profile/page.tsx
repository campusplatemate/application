'use client';

import { Image, Container, Row, Col, Nav, Card } from 'react-bootstrap';

const Profile = () => (
  <main>
    <div className="text-center mb-4">
      <Image src="../profile-banner-1.png" alt="Profile Banner" fluid id="banner-image" />
    </div>
    <Container className="align-items-center">
      <Row className="d-flex justify-content-center">
        <Col xs="auto" className="justify-content-center">
          <Image src="../patrick-1.png" alt="Patrick" roundedCircle id="profile-image" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <strong className="d-flex justify-content-center">Patrick Star</strong>
      </Row>
    </Container>
    <Nav className="justify-content-center" id="profile-nav">
      <Nav.Item className="mx-3">
        <strong>Posts</strong>
      </Nav.Item>
      <Nav.Item className="mx-3">
        <strong>Picked Up</strong>
      </Nav.Item>
    </Nav>
    <Container>
      <Row className="g-4 justify-content-start" id="profile-cards">
        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top" src="/spam.png" style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Spam</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top" src="/pizza.png" style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Pizza</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top" src="/oreo.png" style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Oreo</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top" src="/icecream.png" style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Ice Cream</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Profile;
