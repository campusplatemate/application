'use client';

import { Card } from 'react-bootstrap';
import { RewardItem } from '@prisma/client';

const RewardCard = ({ item }: { item: RewardItem }) => (
  <Card className="custom-card h-100">
    <Card.Img variant="top" src={`/rewards/${item.imageUrl}`} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {item.cost.toLocaleString()}
        Points
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

export default RewardCard;
