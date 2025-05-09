'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { createFeedback } from '@/lib/dbActions';
import { CreateFeedbackSchema } from '@/lib/validationSchemas';
import { lexend } from '@/fonts';

const onSubmit = async (data: { name: string; email: string; message: string }) => {
  await createFeedback(data);
  swal('Success', 'Your message has been shared', 'success', {
    timer: 2000,
  });
};

const CreateFeedbackForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateFeedbackSchema),
  });

  return (
    <Container>
      <p className={`${lexend.className} mb-0 text-left`}>
        <strong>Got feedback? Let&apos;s chat.</strong>
      </p>
      <Row className="justify-content-center">
        <Card className="shadow-none bg-transparent border-0">
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Col>
                <Row>
                  <Col>
                    <Form.Group>
                      <input
                        type="text"
                        placeholder="Name"
                        {...register('name')}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.name?.message}</div>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <input
                        type="text"
                        placeholder="Email"
                        {...register('email')}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <input
                    type="text"
                    placeholder="Message"
                    {...register('message')}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.message?.message}</div>
                </Form.Group>
              </Col>
              <Row>
                <Col>
                  <Button
                    className={`${lexend.className}`}
                    style={{ width: '430px', backgroundColor: '#000000', borderColor: '#000000' }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default CreateFeedbackForm;
