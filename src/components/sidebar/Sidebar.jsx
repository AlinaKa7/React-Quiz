import * as React from 'react';
import { PropTypes } from 'prop-types';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';

export default function SwipeableTemporaryDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CloseIcon onClick={toggleDrawer(anchor, false)} style={{ marginLeft: 'auto', padding: '10px' }}></CloseIcon>
      <List>
        {[
          'HTML Quizzes', 'CSS Quizzes', 'JS Quizzes', 'React Quizzes', 'Python Quizzes', 'Coding Quizzes',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

SwipeableTemporaryDrawer.propTypes = {
  state: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
