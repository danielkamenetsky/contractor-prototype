// client/src/components/Sidebar.js
import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Divider,
    Box,
    Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';

function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: 240,
                    boxSizing: 'border-box',
                    bgcolor: 'primary.main', // Match AppBar color
                    color: 'white'
                },
            }}
        >
            <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'primary.light' }}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                    Work Orders
                </Typography>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ '&:hover': { bgcolor: 'primary.dark' } }}>
                        <ListItemIcon>
                            <HomeIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Home"
                            primaryTypographyProps={{ fontSize: '1rem' }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ '&:hover': { bgcolor: 'primary.dark' } }}>
                        <ListItemIcon>
                            <ListIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="My Requests"
                            primaryTypographyProps={{ fontSize: '1rem' }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider sx={{ bgcolor: 'primary.light' }} />
        </Drawer>
    );
}

export default Sidebar;