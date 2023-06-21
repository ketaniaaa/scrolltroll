import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';
import TopButton from '../images/blueuparrow.png';
import Tooltip from '@mui/material/Tooltip';

export default class BlogToTop extends Component {
  render() {
    return (
      <>
      <Tooltip title="back to top">
     <HashLink smooth to="#top" className='topLink'><img src={TopButton} alt="arrow pointing upwards" className='toTopImg'/></HashLink>
</Tooltip>
      </>
    )
  }
}

