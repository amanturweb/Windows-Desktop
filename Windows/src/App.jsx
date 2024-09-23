import { useState } from 'react';
import Taskbar from './components/Taskbar'; // Import Taskbar component
import DesktopIcon from './components/DesktopIcon'; // Import DesktopIcon component
import Folder from './components/Folder'; // Import Folder component
import folderData from './data/folderData.jsx'; // Import folder data
import './App.css'; // Import CSS styles

import folderIcon from './assets/img/icon.png'; // Import folder icon
import trashIcon from './assets/img/trash.png'; // Import trash icon
import backgroundImage from './assets/img/background.png'; // Import background image

const App = () => {
  const [openFolder, setOpenFolder] = useState(null); // State to manage open folder

  // Define the toggleFolder function to open/close folders
  const toggleFolder = (folderName) => {
    if (openFolder === folderName) {
      setOpenFolder(null); // Close the folder if it's already open
    } else {
      setOpenFolder(folderName); // Open the clicked folder
    }
  };

  // Styles for the app layout
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
  };

  // Styles for the desktop area
  const desktopStyle = {
    flex: '1 0 auto', // Allow this area to grow and shrink
    backgroundImage: `url(${backgroundImage})`, // Set background image
    backgroundSize: 'cover', // Cover the entire area with the image
    backgroundPosition: 'center', // Center the background image
    backgroundRepeat: 'no-repeat', // Prevent image repetition
    display: 'flex', // Use flexbox for layout
    flexWrap: 'wrap', // Allow items to wrap to the next line
    padding: '20px', // Add padding around icons
    position: 'relative', // Positioning context for absolute elements
  };

  return (
    <div style={appStyle}>
      <div style={desktopStyle}>
        {/* Render desktop icons for each folder */}
        {folderData.map((folder, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <DesktopIcon
              icon={folderIcon}
              label={folder.name}
              onClick={() => toggleFolder(folder.name)} // Attach click handler
            />
          </div>
        ))}

        {/* Render the opened folder if one is selected */}
        {openFolder && (
          <Folder
            title={openFolder}
            content={folderData.find((folder) => folder.name === openFolder).content}
            onClose={() => setOpenFolder(null)} // Close folder handler
            style={{
              position: 'fixed', // Centered positioning for the folder
              left: '50%', // Center horizontally
              top: '50%', // Center vertically
              transform: 'translate(-50%, -50%)', // Adjust for exact centering
              width: '500px', // Fixed width for the folder
              height: 'auto', // Auto height based on content
              zIndex: 100, // Layer on top of other elements
              backgroundColor: 'white', // Background color for the folder
              padding: '20px', // Padding inside the folder
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for depth
            }}
          />
        )}

        {/* Trash icon positioned at the bottom right corner */}
        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <DesktopIcon
            icon={trashIcon}
            label="Trash"
            onClick={() => toggleFolder('Trash')} // Open trash folder
          />
        </div>
      </div>
      <Taskbar /> {/* Render the taskbar at the bottom */}
    </div>
  );
};

export default App; // Export the App component
