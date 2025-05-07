/* eslint-disable import/extensions */

'use client';

/* import { Stuff } from '@prisma/client';
import Link from 'next/link'; */
import { useSession } from 'next-auth/react';
import { Button, Card, Image } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { Post } from '@prisma/client';
import Link from 'next/link';

const FoodPostCard = ({ foodpost }: { foodpost: Post }) => {
  const { data: session } = useSession();
  const currentUserEmail = session?.user?.email;

  return (
    <Card className="custom-card">
      <Card.Header>
        Posted by &nbsp;
        <Image
          src={foodpost.image}
          width={50}
          height={50}
          roundedCircle
          style={{ objectFit: 'cover' }}
          className="border p-1 rounded-[75%]"
        />
        &nbsp;
        {foodpost.ownerName}
      </Card.Header>
      <Card.Img variant="top" src={foodpost.image} className="" />
      <Card.Body>
        <Card.Title className="fw-bolder">{foodpost.food}</Card.Title>
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
            {foodpost.description}
          </p>
          <div className="text-center">
            <Button variant="outline-success">Claim!</Button>
          </div>
          <div className="d-flex justify-content-start mt-3">
            {currentUserEmail === foodpost.owner && (
              <Link href={`edit/${foodpost.id}`} className="btn btn-light border">
                Edit
                <Pencil className="ms-2" />
              </Link>
            )}
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default FoodPostCard;
