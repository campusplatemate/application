'use client';

import { signIn } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row, Image } from 'react-bootstrap';

/** The sign in page. */
const SignIn = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const result = await signIn('credentials', {
      callbackUrl: '/list',
      email,
      password,
    });

    if (result?.error) {
      console.error('Sign in failed: ', result.error);
    }
  };

  return (
    <main>
      <Container className="mt-5">
        <Row>
          <Col className="justify-content-start">
            <h1 className="text-center mb-4">Sign In</h1>
            <Card>
              <Card.Body>
                <Form method="post" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <input name="email" type="text" className="form-control" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <input name="password" type="password" className="form-control" />
                  </Form.Group>

                  <Button type="submit" className="mt-3" size="lg" variant="outline-success">
                    Sign In
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                Don&apos;t have an account?&nbsp;
                <a href="/auth/signup">Sign up</a>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="justify-content-end d-md-flex">
            <Image src="/cpm-logo.png" alt="Sign In" />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignIn;
