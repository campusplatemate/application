'use client';

import { signOut } from 'next-auth/react';
import { Button, Col, Row } from 'react-bootstrap';

/** After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <Col id="signout-page" className="text-center py-3">
      <h2>Do you want to sign out?</h2>
      <Row className="justify-content-center">
        <Col xs={4} />
        <Col>
          <Button variant="warning" onClick={() => signOut({ callbackUrl: '/', redirect: true })}>
            Sign Out
          </Button>
        </Col>
        <Col>
          <Button variant="light" href="/">
            Cancel
          </Button>
        </Col>
        <Col xs={4} />
      </Row>
    </Col>
  </div>
);

export default SignOut;
