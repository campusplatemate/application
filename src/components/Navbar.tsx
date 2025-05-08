/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { quicksand } from '@/fonts';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight, Lock, Person, PersonFill } from 'react-bootstrap-icons';
// import ProfilePage from './ProfilePage';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/cpm-nohands.png" alt="Campus Plate Mate" width={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`${kanit.className} me-auto justify-content-start`}
            style={{ fontSize: '20px' }}
          >
            {currentUser
              ? [
                  <Nav.Link
                    id="dashboard-nav"
                    href="/dashboard"
                    key="list"
                    active={pathName === '/dashboard'}
                  >
                    Dashboard
                  </Nav.Link>,
                  <Nav.Link className="me-3" id="add-food-nav" href="/add" key="add" active={pathName === '/add'}>
                    Add Food
                  </Nav.Link>,
                  <Nav.Link
                    className="me-3"
                    id="rewards-nav"
                    href="/rewards"
                    key="rewards"
                    active={pathName === '/rewards'}
                  >
                    Rewards
                  </Nav.Link>,
                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link id="admin-stuff-nav" href="/admin" key="admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav
            className={`${kanit.className}`}
            style={{ fontSize: '21px' }}
          >
            {session ? (
              <NavDropdown
                id="login-dropdown"
                title={<span className="navbar-login-title">{currentUser}</span>}
                className={`${quicksand.className}`}
                style={{ fontSize: '15px', fontWeight: '400' }}
              >
                <NavDropdown.Item id="login-dropdown-profile" href="/auth/profile">
                  <Person className="dropdown-icon" />
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight className="dropdown-icon" />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock className="dropdown-icon" />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signinup">
                  <PersonFill className="dropdown-icon" />
                  Sign in/up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
