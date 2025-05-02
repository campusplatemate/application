/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { quicksand } from '@/fonts';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
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
            className={`${quicksand.className} me-auto justify-content-start`}
            style={{ fontSize: '18px', fontWeight: '500' }}
          >
            {currentUser
              ? [
<<<<<<< Updated upstream
                  <Nav.Link
                    id="dashboard-nav"
                    href="/dashboard"
                    key="list"
                    active={pathName === '/dashboard'}
                  >
                    Dashboard
                  </Nav.Link>,
                  <Nav.Link id="add-food-nav" href="/add" key="add" active={pathName === '/add'}>
                    Add Food
                  </Nav.Link>,
                  <Nav.Link id="rewards-nav" href="/rewards" key="rewards" active={pathName === '/rewards'}>
=======
                  <Nav.Link className="me-3" id="list-stuff-nav" href="/list" key="list" active={pathName === '/list'}>
                    Dashboard
                  </Nav.Link>,
                  <Nav.Link className="me-3" id="add-stuff-nav" href="/add" key="add" active={pathName === '/add'}>
                    Add Food
                  </Nav.Link>,
                  <Nav.Link
                    className="me-3"
                    id="list-stuff-nav"
                    href="/rewards"
                    key="rewards"
                    active={pathName === '/rewards'}
                  >
>>>>>>> Stashed changes
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
          <Nav className={`${quicksand.className}`} style={{ fontSize: '17px', fontWeight: '500' }}>
            {session ? (
              <NavDropdown
                id="login-dropdown"
                title={<span className="navbar-login-title">{currentUser}</span>}
                className={`${quicksand.className}`}
                style={{ fontSize: '15px', fontWeight: '400' }}
              >
                <NavDropdown.Item id="login-dropdown-profile" href="/auth/profile">
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
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill className="dropdown-icon" />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill className="dropdown-icon" />
                  Sign up
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
