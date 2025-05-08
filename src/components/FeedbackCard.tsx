'use client';

import { Card } from 'react-bootstrap';
import { Feedback } from '@prisma/client';
import { lato, lexend } from '@/fonts';

const RewardCard = ({ item }: { item: Feedback }) => (
  <Card className="custom-card h-100">
    <Card.Body>
      <Card.Title className={`${lexend.className}`}>{item.name}</Card.Title>
      <Card.Subtitle className={`${lato.className} mb-2 text-muted`}>
        {item.email}
        &nbsp;&nbsp;|&nbsp;&nbsp;
        {item.createdAt.toLocaleDateString()}
      </Card.Subtitle>
      <Card.Text className={`${lato.className}`}>{item.message}</Card.Text>
    </Card.Body>
  </Card>
);

export default RewardCard;
