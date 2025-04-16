'use client';

import { Container, Image, Row, Col } from 'react-bootstrap';

const ProfilePage = () => (
  <main>
    <div className="text-center mb-4" id="banner-div">
      <Image src="./profile-banner.jpg" alt="Profile Banner" fluid />
    </div>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="./patrick.png" alt="Patrick" roundedCircle />
        </Col>
      </Row>
    </Container>
  </main>
);

export default ProfilePage;
