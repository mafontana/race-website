import React from 'react';
import Button from '@material-ui/core/Button'
import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <Button
            href="google.com"
            variant="contained"
            size="small"
            style={{
                background: 'red ',
                color: 'white'
            }}
        >
            <img 
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
            
            />
        
        </Button>
    );
};

export default MyButton;