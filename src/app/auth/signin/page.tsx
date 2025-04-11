'use client';

import { signIn } from 'next-auth/react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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
        <Row className="justify-content-start">
          <Col xs={4}>
            <h1 className="text-center">Sign In</h1>

            <Form method="post" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <input name="email" type="text" className="form-control" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <input name="password" type="password" className="form-control" />
              </Form.Group>
              <Button type="submit" className="mt-3" size="lg">
                Sign In
              </Button>
            </Form>
            <hr />
            <p>
              Don&apos;t have an account?&nbsp;
              <a href="/auth/signup">Sign up</a>
            </p>

          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignIn;
