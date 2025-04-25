/* eslint-disable import/extensions */

'use client';

/* import { Stuff } from '@prisma/client';
import Link from 'next/link'; */
import { Button, Card, Image } from 'react-bootstrap';
import { Post } from '@/lib/validationSchemas';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const FoodPostCard = ({ foodpost }: { foodpost: Post }) => (
  <Card className="custom-card h-100">
    <Card.Header>
      Pick-up Location:&nbsp;
      {foodpost.location}
    </Card.Header>
    <Card.Img variant="top" src={foodpost.foodImg} width={75} height={250} />
    <Card.Body>
      <Card.Title className="fw-bolder">{foodpost.foodName}</Card.Title>
      <p>
        Qnty:&nbsp;
        {foodpost.quantity}
        <br />
        Best Before:&nbsp;
        {foodpost.bestDate}
      </p>
      <hr />
      <Card.Subtitle>
        <p>
          Donor:&nbsp;
          <Image src={foodpost.faceImg} roundedCircle width={75} />
        &nbsp;
          {foodpost.owner}
        </p>
        <p className="text-muted">
          {foodpost.message}
        </p>
        <div className="text-center">
          <Button variant="outline-success">Accept Donation</Button>
        </div>
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

export default FoodPostCard;
