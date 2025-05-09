'use client';

import { useEffect, useState } from 'react';
import { Image, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { lexend } from '@/fonts';
import { Post } from '@prisma/client';
import dynamic from 'next/dynamic';

// Dynamically import FoodPostCard (Client Component)
const FoodPostCard = dynamic(() => import('@/components/FoodPostCard'), { ssr: false });

const Profile = () => {
  const [claimedPosts, setClaimedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchClaimedPosts = async () => {
      const res = await fetch('/api/posts/claimed');
      if (res.ok) {
        const data = await res.json();
        setClaimedPosts(data);
      }
    };

    fetchClaimedPosts();
  }, []);

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
      <Tabs
        defaultActiveKey="post"
        id="justify-tab-example"
        className={`${lexend.className} mb-3 mt-5`}
        justify
      >
        <Tab eventKey="post" title="Posts">
          <p className="text-center pt-3">Your posts will go here.</p>
        </Tab>
        <Tab eventKey="picked-up" title="Picked Up">
          {claimedPosts.length > 0 ? (
            <div className="columnWrapper p-3">
              {claimedPosts.map((post) => (
                <div key={post.id} className="tile">
                  <FoodPostCard foodpost={post} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center pt-3">You haven’t claimed any food yet.</p>
          )}
        </Tab>
      </Tabs>
    </main>
  );
};

export default Profile;
