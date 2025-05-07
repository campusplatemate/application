/* eslint-disable no-alert */
/* eslint-disable import/extensions */

'use client';

/* import { Stuff } from '@prisma/client';
import Link from 'next/link'; */
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button, Card, Image } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import { Post } from '@prisma/client';
import Link from 'next/link';

const FoodPostCard = ({ foodpost }: { foodpost: Post }) => {
  const { data: session } = useSession();
  const currentUserEmail = session?.user?.email;
  const router = useRouter();

  const handleDelete = async (postId: number) => {
    const userConfirmed = window.confirm('Are you sure?');
    if (!userConfirmed) return;

    const res = await fetch(`/api/posts/${postId}`, {
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
        {foodpost.owner}
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
          <div className="d-flex justify-content-center gap-2 mt-3">
            {currentUserEmail === foodpost.owner ? (
              <>
                <Link href={`/edit/${foodpost.id}`} className="btn btn-light border">
                  Edit
                  <Pencil className="ms-2" />
                </Link>
                <Button variant="outline-danger" onClick={() => handleDelete(foodpost.id)}>
                  Delete
                </Button>
              </>
            ) : (
              <Button variant="outline-success">Claim!</Button>
            )}
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default FoodPostCard;
