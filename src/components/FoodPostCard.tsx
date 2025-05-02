/* eslint-disable import/extensions */

'use client';

/* import { Stuff } from '@prisma/client';
import Link from 'next/link'; */
import { Button, Card, Image } from 'react-bootstrap';
import { Post } from '@/lib/validationSchemas';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const FoodPostCard = ({ foodpost }: { foodpost: Post }) => (
  <Card className="custom-card">
    <Card.Header>
      Posted by &nbsp;
      <Image
        src={foodpost.faceImg}
        width={50}
        height={50}
        roundedCircle
        style={{ objectFit: 'cover' }}
        className="border p-1 rounded-[75%]"
      />
        &nbsp;
      {foodpost.owner}
    </Card.Header>
    <Card.Img variant="top" src={foodpost.foodImg} className="" />
    <Card.Body>
      <Card.Title className="fw-bolder">{foodpost.foodName}</Card.Title>
      <p>
        Quantity:&nbsp;
        {foodpost.quantity}
        <br />
        Best Before:&nbsp;
        {foodpost.bestDate}
      </p>
      <hr />
      <Card.Subtitle>
        <p>
          Pick-up Location:&nbsp;
          {foodpost.location}
        </p>
        <p className="text-muted">
          {foodpost.message}
        </p>
        <div className="text-center">
          <Button variant="outline-success">Claim!</Button>
        </div>
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

export default FoodPostCard;
