import React from 'react';
import styled from 'styled-components';

// Styled component for the folder container
const FolderContainer = styled.div`
  background: white; /* Background color of the folder */
  border: 1px solid #ccc; /* Light gray border */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  border-radius: 5px; /* Rounded corners */
  width: 500px; /* Fixed width */
  max-height: 80vh; /* Limit height to 80% of the viewport */
  overflow-y: auto; /* Allow vertical scrolling */
  padding: 20px; /* Add padding for aesthetics */
  position: relative; /* Relative positioning for close button */
`;

// Styled component for the close button
const CloseButton = styled.button`
  position: absolute; /* Position it absolutely within the container */
  top: 10px; /* Distance from the top */
  right: 10px; /* Distance from the right */
  background: none; /* No background */
  border: none; /* No border */
  cursor: pointer; /* Change cursor to pointer */
`;

// Functional component for Folder
const Folder = ({ title, content, onClose }) => {
  return (
    <FolderContainer>
      <h2>{title}</h2> {/* Render the folder title */}
      <CloseButton onClick={onClose}>X</CloseButton> {/* Close button */}
      <hr /> {/* Horizontal rule for separation */}
      {content} {/* Render the content passed as a prop */}
    </FolderContainer>
  );
};

export default Folder; // Export the component
