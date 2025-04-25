'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row, Image } from 'react-bootstrap';
import { Send } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { createPost } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { CreatePostSchema } from '@/lib/validationSchemas';
import { Karla } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-karla',
});

const onSubmit = async (
  data: {
    food: string;
    quantity: number;
    bestDate: string;
    image: string;
    description: string;
    location: string;
    owner: string },
) => {
  await createPost(data);
  swal('Success', 'Your post has been shared', 'success', {
    timer: 2000,
  });
};

const CreatePostForm: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreatePostSchema),
    defaultValues: {
      quantity: 0,
    },
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="justify-content-between align-items-center mb-2">
                  <Col xs="auto">
                    <h2 className={`text-center ${karla.className}`}>Post A Bite</h2>
                  </Col>
                  <Col xs="auto" className="text-end">
                    <Button style={{ width: '125px' }} type="submit" className="submitButton">
                      Share
                      <Send className="ms-2" />
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Image</Form.Label>
                      <input
                        type="text"
                        {...register('image')}
                        className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.image?.message}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Location</Form.Label>
                      <input
                        type="text"
                        {...register('location')}
                        className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.location?.message}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <textarea
                        {...register('description')}
                        style={{ minHeight: '120px', minWidth: '100%' }}
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.description?.message}</div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Image src="./patrick-1.png" alt="Patrick" roundedCircle width="40" height="40" className="mb-3" />
                    <span className="mb-3 ms-2">username(?)</span>
                    <Form.Group>
                      <Form.Label>Food</Form.Label>
                      <input
                        type="text"
                        {...register('food')}
                        className={`form-control ${errors.food ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.food?.message}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Quantity</Form.Label>
                      <input
                        type="number"
                        {...register('quantity')}
                        className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.quantity?.message}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Best Before:</Form.Label>
                      <input
                        {...register('bestDate')}
                        className={`form-control ${errors.bestDate
                          ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.bestDate?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <input type="hidden" {...register('owner')} value={currentUser} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button
                        type="button"
                        onClick={() => reset()}
                        variant=""
                        className="mt-3 float-right resetButton"
                      >
                        Discard
                      </Button>
                    </Col>
                    <Row />
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePostForm;
