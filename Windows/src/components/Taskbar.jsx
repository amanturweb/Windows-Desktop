import React from 'react';
import styled from 'styled-components';
import windowsIcon from '../assets/img/windowsIcon.png'; // Import Windows icon
import volumeIcon from '../assets/img/volumeIcon.png'; // Import volume icon

// Styled component for the taskbar
const TaskbarWrapper = styled.div`
  height: 50px; /* Fixed height for the taskbar */
  background-color: #d1cfcf; /* Background color of the taskbar */
  display: flex; /* Flexbox layout */
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Space items evenly */
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2); /* Shadow effect */
  position: relative; /* Relative positioning for child elements */
`;

// Left side of the taskbar
const LeftSide = styled.div`
  display: flex; /* Flexbox layout */
  align-items: stretch; /* Stretch items to fill the container */
  flex: 1; /* Take available space */
`;

// Right side of the taskbar
const RightSide = styled.div`
  display: flex; /* Flexbox layout */
  align-items: center; /* Center items vertically */
  gap: 20px; /* Space between items */
  margin: 10px; /* Margin for right side */
`;

// Styled component for the Windows icon
const WindowsIcon = styled.img`
  width: 43px; /* Width of the icon */
  height: 49px; /* Height of the icon */
  cursor: pointer; /* Change cursor on hover */
  border: 1px solid black; /* Black border */
  margin-right: 0; /* Remove any right margin */
  padding: 0; /* Remove padding */
  background-color: white; /* Ensure background matches taskbar */
`;

// Styled component for the search bar
const SearchBar = styled.input`
  height: 49px; /* Match the height of the taskbar */
  width: 30%; /* Width of the search bar */
  padding: 0 10px; /* Horizontal padding */
  border: 1px solid black; /* Black border */
  outline: none; /* Remove outline */
  font-size: 18px; /* Font size for text */
  background-color: white; /* Background color */
  margin: 0; /* Remove margin */
  border-radius: 0; /* No border radius */
`;

// Styled component for icons in the taskbar
const Icon = styled.img`
  width: 20px; /* Width of the icon */
  height: 20px; /* Height of the icon */
  cursor: pointer; /* Change cursor on hover */
`;

// Styled component for displaying date and time
const DateTime = styled.div`
  font-size: 14px; /* Font size for date and time */
  color: black; /* Text color */
`;

// Styled component for language selector
const LanguageSelector = styled.div`
  font-size: 14px; /* Font size for language text */
  color: black; /* Text color */
  cursor: pointer; /* Change cursor on hover */
`;

// Taskbar component
const Taskbar = () => {
  // Get current date and time
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = currentTime.toLocaleDateString();

  return (
    <TaskbarWrapper>
      <LeftSide>
        <WindowsIcon src={windowsIcon} alt="Windows Icon" /> {/* Windows icon */}
        <SearchBar type="text" placeholder="Type here to search" /> {/* Search bar */}
      </LeftSide>
      <RightSide>
        <LanguageSelector>ENG</LanguageSelector> {/* Language selector */}
        <Icon src={volumeIcon} alt="Volume Icon" /> {/* Volume icon */}
        <DateTime>
          {dateString} {timeString} {/* Display date and time */}
        </DateTime>
      </RightSide>
    </TaskbarWrapper>
  );
};

export default Taskbar; // Export the Taskbar component
