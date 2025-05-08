'use client';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { RewardItem } from '@prisma/client';
import RewardCard from './RewardCard';

type RewardsClientProps = {
  rewards: RewardItem[];
};

const RewardsClient = ({ rewards }: RewardsClientProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortedRewards, setSortedRewards] = useState<RewardItem[]>([]);

  useEffect(() => {
    const sorted = [...rewards].sort((a, b) => (sortOrder === 'asc' ? a.cost - b.cost : b.cost - a.cost));
    setSortedRewards(sorted);
  }, [sortOrder, rewards]);

  return (
    <Container fluid className="py-3 px-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Dropdown className="ps-4 pb-3" onSelect={(val) => setSortOrder(val as 'asc' | 'desc')}>
          <Dropdown.Toggle variant="secondary" className="filter-dropdown">
            Sort by Points
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="asc">Lowest to Highest</Dropdown.Item>
            <Dropdown.Item eventKey="desc">Highest to Lowest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {sortedRewards.map((item) => (
          <Col key={item.id}>
            <RewardCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RewardsClient;
