'use client';

import { Image, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

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
    <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3 mt-5" justify>
      <Tab eventKey="post" title="Posts">
        Tab content for Home
      </Tab>
      <Tab eventKey="picked-up" title="Picked Up">
        Tab content for Profile
      </Tab>
    </Tabs>
  </main>
);

export default Profile;
