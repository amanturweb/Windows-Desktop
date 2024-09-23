import React from 'react';
import styled from 'styled-components';

// Styled component for the icon wrapper
const IconWrapper = styled.div`
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack icon and label vertically */
  align-items: center; /* Center items horizontally */
  cursor: pointer; /* Change cursor to pointer on hover */
  margin: 10px; /* Margin around each icon */
`;

// Styled component for the icon image
const IconImage = styled.img`
  width: 50px; /* Set width of the icon */
  height: 50px; /* Set height of the icon */
`;

// Styled component for the icon label
const IconLabel = styled.span`
  margin-top: 5px; /* Space between icon and label */
  text-align: center; /* Center the label text */
`;

// Functional component for DesktopIcon
const DesktopIcon = ({ icon, label, onClick }) => {
  return (
    <IconWrapper onClick={onClick}> {/* Handle click event */}
      <IconImage src={icon} alt={label} /> {/* Render icon image */}
      <IconLabel>{label}</IconLabel> {/* Render icon label */}
    </IconWrapper>
  );
};

export default DesktopIcon; // Export the component
