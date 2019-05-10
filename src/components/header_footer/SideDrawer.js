import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {
    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}
        >
            <List
                component="nav">
                <ListItem button onClick={()=> console.log("featured")}>
                Event starts in
                </ListItem>
                <ListItem button onClick={()=> console.log("info")}>
                Info
                </ListItem>
                <ListItem button onClick={()=> console.log("highlights")}>
                Highlights
                </ListItem>
                <ListItem button onClick={()=> console.log("registration")}>
                Registration
                </ListItem>
                <ListItem button onClick={()=> console.log("location")}>
                Location
                </ListItem>
            
            </List>
           
        </Drawer>
    );
};

export default SideDrawer;