import React from 'react';
import icon from '../images/icon.png';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import InboxIcon from '@mui/icons-material/Inbox';
import PersonIcon from '@mui/icons-material/Person';

export default function SocialNav() {
  return (
    <>
    <nav className='headerSocial'>  
       <img src={icon} alt="troll scroll icon"  className='postIcon'/>
         <TextField    className='search'

        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className='postHeadIcon'/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
     
          color="primary"
          focused
      />
    <span className='postLeftNav'>
    <HomeIcon className='postHeadIconA' fontSize='large'/>
    <ExploreIcon className='postHeadIconA' fontSize='large'/>
<InboxIcon className='postHeadIconA' fontSize='large'/>
<PersonIcon className='postHeadIconA'fontSize='large'/>
</span>
    </nav>
  
    <section className='socialTabs'>
        <p className='feedName'>Feed</p>
        <p className='exploreName'>Explore</p>
    </section>
    </>
  )
}
