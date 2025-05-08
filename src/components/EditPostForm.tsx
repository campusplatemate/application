'use client';

import { Button, Card, Col, Container, Form, Row, Image } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Send } from 'react-bootstrap-icons';
import { karla } from '@/fonts';
import { Post } from '@prisma/client';
// eslint-disable-next-line import/extensions
import { EditPostSchema } from '@/lib/validationSchemas';
// eslint-disable-next-line import/extensions
import { editPost } from '@/lib/dbActions';

const onSubmit = async (data: Post) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await editPost(data);
  swal('Success', 'Your contact has been updated', 'success', {
    timer: 2000,
  });
};

const EditPostForm = ({ post }: { post: Post }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Post>({
    resolver: yupResolver(EditPostSchema),
    defaultValues: post,
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={post.id} />
                <Row className="justify-content-between align-items-center mb-2">
                  <Col xs="auto">
                    <h2 className={`text-center ${karla.className}`}>Edit Post</h2>
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
                      <Form.Label>Name</Form.Label>
                      <input
                        type="text"
                        {...register('ownerName')}
                        className={`form-control ${errors.ownerName ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.ownerName?.message}</div>
                    </Form.Group>
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
                    <Image src="/patrick-1.png" alt="Patrick" roundedCircle width="40" height="40" className="mb-3" />
                    <span className="mb-3 ms-2">{post.owner}</span>
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
                <input type="hidden" {...register('owner')} value={post.owner} />
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

export default EditPostForm;
