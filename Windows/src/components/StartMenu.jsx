import React, { useState } from 'react';
import styled from 'styled-components';

const StartMenuWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 250px;
  background-color: #333;
  padding: 20px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const StartMenu = ({ isOpen }) => {
    return (
        <StartMenuWrapper open={isOpen}>
            <ul>
                <li>File Explorer</li>
                <li>Settings</li>
                <li>Control Panel</li>
            </ul>
        </StartMenuWrapper>
    );
};

export default StartMenu;
