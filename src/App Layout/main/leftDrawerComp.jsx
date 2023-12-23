// LeftDrawerComponent.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onCloseDrawer}>
      <List>
        <ListItem button component={Link} to="HOME" onClick={onCloseDrawer}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="LOGIN" onClick={onCloseDrawer}>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="SIGNUP" onClick={onCloseDrawer}>
          <ListItemText primary="Sign Up" />
        </ListItem>
        <ListItem button component={Link} to="/NEWCARD" onClick={onCloseDrawer}>
          <ListItemText primary="Create Card" />
        </ListItem>
        <ListItem button component={Link} to="FAVCARDS" onClick={onCloseDrawer}>
          <ListItemText primary="Favorite Cards" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftDrawerComponent;
