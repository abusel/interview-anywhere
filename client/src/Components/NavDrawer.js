import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';


function NavDrawer({state, setState, toggleDrawer, logoutFunc, user}){
     let history = useHistory()
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>

          <ListItem button key={'Log Out'} onClick={logoutFunc}>
                <ListItemIcon>
                  { <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={'Log Out'} />
              </ListItem>

            
            <ListItem button key={'Home'} onClick={()=> {
                history.push('/')
            }}>
                <ListItemIcon>
                  { <HomeIcon />}
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>


              
              {!user.is_company && <ListItem button key={'Job Postings'} onClick={()=> {
                history.push('/jobpostings')
            }}>
                <ListItemIcon>
                  { <AppsIcon />}
                </ListItemIcon>
                <ListItemText primary={'View Job Postings'} />
              </ListItem>}


              {user.is_company && <ListItem button key={'Create a Job'} onClick={()=> {
                history.push('/create')
            }}>
                <ListItemIcon>
                  { <AddIcon />}
                </ListItemIcon>
                <ListItemText primary={'Create a Job'} />
              </ListItem>}

              {user.is_company && <ListItem button key={'Take Mock Interview'} onClick={()=> {
                history.push('/mock')
            }}>
                <ListItemIcon>
                  { <VideoCameraFrontIcon />}
                </ListItemIcon>
                <ListItemText primary={'Take Mock Interview'} />
              </ListItem>}

              
              
              
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
          </List>
        </Box>
      );
    
    return(
        <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
  
    )
}

export default NavDrawer