'use client';

import { Post } from '@prisma/client';
import { useState } from 'react';
import { Container, Row, Col, Image, Tabs, Tab } from 'react-bootstrap';
import { lexend } from '../fonts';
import FoodPostCard from './FoodPostCard';

const ProfileClient = ({ createdPosts }: { createdPosts: Post[] }) => {
  const [ownedPosts] = useState<Post[]>(createdPosts);

  return (
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

      <Tabs defaultActiveKey="post" id="justify-tab-example" className={`${lexend.className} mb-3 mt-5`} justify>
        <Tab eventKey="post" title="Posts">
          {ownedPosts.length > 0 ? (
            <div className="columnWrapper p-3">
              {ownedPosts.map((post) => (
                <div key={post.id} className="tile">
                  <FoodPostCard foodpost={post} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center pt-3">You haven’t added any posts yet.</p>
          )}
        </Tab>
      </Tabs>
    </main>
  );
};

export default ProfileClient;
