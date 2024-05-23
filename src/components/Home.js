import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth, signOut } from '../firebaseConfig';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Nav = styled.nav`
  margin-top: 20px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline;
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Home({ onLogout }) {
  const handleLogout = () => {
    signOut(auth);
    onLogout();
  };

  return (
    <Container>
      <h1>Admin Panel</h1>
      <Nav>
        <NavList>
          <NavItem><StyledLink to="/group-requests">Group Requests</StyledLink></NavItem>
          <NavItem><StyledLink to="/users">Users</StyledLink></NavItem>
          <NavItem><StyledLink to="/add-admin">Add Admin</StyledLink></NavItem>
        </NavList>
      </Nav>
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
}

export default Home;
