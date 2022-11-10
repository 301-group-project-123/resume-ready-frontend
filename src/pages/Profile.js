import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Card, ListGroupItem } from 'react-bootstrap';
import '../Profile.css';
import AuthButtons from '../AuthButton';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div id='profile'>
       
        <Card  border="info" style={{ width: '19rem',height: '17rem', backgroundColor: 'black' }}>
        <Card.Img variant="top" src={user.picture} alt={user.name} />
        <ListGroupItem  style={{backgroundColor: 'black', color:'white' }}>{user.name}</ListGroupItem>
        <ListGroupItem style={{backgroundColor: 'black', color:'white' }}>{user.email}</ListGroupItem>
        <AuthButtons />
        </Card>
      </div>
    )
  );
};

export default Profile;