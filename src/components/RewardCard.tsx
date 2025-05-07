'use client';

import { Button, Card } from 'react-bootstrap';
import { RewardItem } from '@prisma/client';
import { lexend } from '@/fonts';
import Link from 'next/link';

const RewardCard = ({ item }: { item: RewardItem }) => (
  <Card className="custom-card h-100">
    <Card.Img variant="top" src={`/rewards/${item.imageUrl}`} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {item.cost.toLocaleString()}
        &nbsp;Points
      </Card.Subtitle>
      <Link href={`/checkout/${item.id}`} passHref>
        <Button className={`${lexend.className} rewardButton mt-2`} type="button">
          Redeem
        </Button>
      </Link>
    </Card.Body>
  </Card>
);

export default RewardCard;
