/* eslint-disable import/extensions */

'use client';

/* import { Stuff } from '@prisma/client';
import Link from 'next/link'; */
import { Button, Card } from 'react-bootstrap';
import { Post } from '@prisma/client';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const FoodPostCard = ({ foodpost }: { foodpost: Post }) => (
  <Card className="custom-card h-100">
    <Card.Header>
      Pick-up Location:&nbsp;
      {foodpost.location}
    </Card.Header>
    <Card.Img variant="top" src={foodpost.image} width={75} height={250} />
    <Card.Body>
      <Card.Title className="fw-bolder">{foodpost.food}</Card.Title>
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
        &nbsp;
          {foodpost.owner}
        </p>
        <p className="text-muted">
          {foodpost.description}
        </p>
        <div className="text-center">
          <Button variant="outline-success">Accept Donation</Button>
        </div>
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

export default FoodPostCard;
