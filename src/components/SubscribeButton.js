import React, { Component } from 'react';
import Popover from '@mui/material/Popover';


class SubscribeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const id = open ? 'subPopover' : undefined;

    return (
      <div>
        <button className='button subscribeButton' onClick={this.handleClick}>
         Subscribe to Blog
        </button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            
          }}
        >
          <p className='p-content popoverSubContent'>Thanks for subscribing. We can now spam you!</p>
        </Popover>
      </div>
    );
  }
}

export default SubscribeButton;



