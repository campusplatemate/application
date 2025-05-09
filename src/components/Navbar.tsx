/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { kanit, lexend } from '@/fonts';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill } from 'react-bootstrap-icons';
// import ProfilePage from './ProfilePage';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <Navbar bg="" className="text-white" expand="lg" style={{ backgroundColor: '#234F1E' }}>
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
                  <Nav.Link id="dashboard-nav" href="/dashboard" key="list" active={pathName === '/dashboard'}>
                    Dashboard
                  </Nav.Link>,
                  <Nav.Link id="add-food-nav" href="/add" key="add" active={pathName === '/add'}>
                    Add Food
                  </Nav.Link>,
                  <Nav.Link id="rewards-nav" href="/rewards" key="rewards" active={pathName === '/rewards'}>
                    Rewards
                  </Nav.Link>,
                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link
                id="admin-stuff-nav"
                href="/admin"
                key="admin"
                active={pathName === '/admin'}
                className={`${lexend.className}`}
              >
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav className={`${kanit.className}`} style={{ fontSize: '21px' }}>
            {session ? (
              <NavDropdown
                id="login-dropdown"
                title={currentUser}
                className={`${kanit.className}`}
                style={{ fontSize: '18px' }}
              >
                <NavDropdown.Item id="login-dropdown-profile" href="/auth/profile" className={`${lexend.className}`}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="login-dropdown-sign-out"
                  href="/api/auth/signout"
                  className={`${lexend.className}`}
                >
                  <BoxArrowRight className="dropdown-icon" />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="login-dropdown-change-password"
                  href="/auth/change-password"
                  className={`${lexend.className}`}
                >
                  <Lock className="dropdown-icon" />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signinup" className={`${lexend.className}`}>
                  <PersonFill className="dropdown-icon" />
                  Sign In/Up
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
