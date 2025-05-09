/* eslint-disable no-alert */
/* eslint-disable import/extensions */

'use client';

/* import { Stuff } from '@prisma/client';
import Link from 'next/link'; */
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { Post } from '@prisma/client';
import Link from 'next/link';

const FoodPostCard = ({ foodpost }: { foodpost: Post }) => {
  const { data: session } = useSession();
  const currentUserEmail = session?.user?.email;
  const router = useRouter();

  const handleDelete = async () => {
    const userConfirmed = window.confirm('Are you sure?');
    if (!userConfirmed) return;

    const res = await fetch(`/api/posts/${foodpost.id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert('Post deleted!');
      router.refresh();
    } else {
      const err = await res.json().catch(() => ({}));
      console.error('Delete failed:', err);
      alert('Failed to delete post.');
    }
  };

  return (
    <Card className="custom-card">
      <Card.Header className="float-start">
        Posted by &nbsp;
        <Image
          src={foodpost.image}
          alt={`${foodpost.owner}'s post image`}
          width={50}
          height={50}
          roundedCircle
          style={{ objectFit: 'cover' }}
          className="border p-1 rounded-[75%]"
        />
        &nbsp;
        {foodpost.ownerName}
      </Card.Header>
      <Card.Img variant="top" src={foodpost.image} alt={foodpost.food} className="" />
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
          <div className="text-center gap-2 mt-3">
            {currentUserEmail === foodpost.owner && (
              <>
                <Button variant="outline-success">Claim!</Button>
                <br />
              </>
            )}
            <Row>
              {currentUserEmail === foodpost.owner && (
                <Col className="text-start">
                  <Link href={`/edit/${foodpost.id}`} className="btn btn-light border mt-3">
                    Edit
                    <Pencil className="ms-2" />
                  </Link>
                </Col>
              )}
              {(currentUserEmail === foodpost.owner || currentUserEmail === 'admin@foo.com') && (
                <Col className="text-end">
                  <Button variant="outline-danger" className="mt-3" onClick={handleDelete}>
                    Delete
                  </Button>
                </Col>
              )}
            </Row>
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default FoodPostCard;
