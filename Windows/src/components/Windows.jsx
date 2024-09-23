import React from 'react';
import styled from 'styled-components';

// Wrapper for the window component
const WindowWrapper = styled.div`
  position: absolute; /* Absolute positioning */
  top: 100px; /* Position from the top */
  left: 100px; /* Position from the left */
  width: 300px; /* Width of the window */
  height: 200px; /* Height of the window */
  border: 1px solid black; /* Border color */
  background-color: white; /* Background color */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Shadow effect */
  z-index: 1000; /* Ensure it's above other elements */
`;

// Header section of the window
const Header = styled.div`
  display: flex; /* Flexbox layout */
  justify-content: space-between; /* Space between title and close button */
  padding: 5px; /* Padding inside header */
  background-color: #f0f0f0; /* Background color for header */
  border-bottom: 1px solid #ccc; /* Bottom border */
`;

// Close button in the header
const CloseButton = styled.button`
  border: none; /* No border */
  background: transparent; /* Transparent background */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size */
`;

// Content area of the window
const Content = styled.div`
  padding: 10px; /* Padding inside content */
`;

// Main Window component
const Window = ({ title, onClose, children }) => {
  return (
    <WindowWrapper>
      <Header>
        <span>{title}</span> {/* Title of the window */}
        <CloseButton onClick={onClose}>X</CloseButton> {/* Close button */}
      </Header>
      <Content>{children}</Content> {/* Render child components */}
    </WindowWrapper>
  );
};

export default Window; // Export the Window component
