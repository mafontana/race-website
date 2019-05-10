import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#2f2f2f',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_audiowide header_logo_venue">Colorado Cycling Challenge</div>
                </div>
                <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=> console.log("open")}
                >
                    <MenuIcon/>
                </IconButton>

            </Toolbar>
            
            </AppBar>
        );
    }
}

export default Header;