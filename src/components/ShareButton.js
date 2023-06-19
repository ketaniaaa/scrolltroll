import React, { Component } from 'react';
import { Modal } from '@mui/base';
import { HashLink } from 'react-router-hash-link';
import '../styles/shareButton.css';
import CloseIcon from '../images/closeWhite.svg';
export default class ShareButton extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      open: false, 
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
     const { open } = this.state;
    return (
      <>
      <button onClick={this.handleOpen} className="shareButton"><p className='shareP'>share post!</p></button>
      <Modal
          open={open}
          onClose={this.handleClose}
        >
          <section className="modalContent">
        <section>
            <button onClick={this.handleClose} className='closeModal'><img src={CloseIcon} alt="Close Icon" className='closeIconModal' /> /</button>
            <p>You can only share this post on Scroll Troll</p>
             
        </section>
       <HashLink to='/#form' >Create an account.</HashLink>
         
          </section>
        </Modal>
      </>
    )
  }
}
