// Header.jsx

// import React from 'react';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import './Header.css'

// Styled Avatar component with custom styles
const StyledAvatar = styled(Avatar)(({theme}) => ({
  background: '#000', // Black background color
   marginRight: theme.spacing(5), // Add spacing between avatar and right part
}));

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h1 className="title">
            MNNIT Event Management
          </h1>
          <div className="avatar-container">
            {/* Styled Avatar component */}
            <StyledAvatar>H</StyledAvatar>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
