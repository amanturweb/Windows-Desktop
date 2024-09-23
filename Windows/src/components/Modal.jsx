import React from 'react';
import './Modal.css'; // Import styling for the modal

const Modal = ({ isOpen, onClose, imageSrc }) => {
    // Return null if the modal is not open
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}> {/* Overlay that closes the modal on click */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Stops click events from bubbling up to the overlay */}
                <img src={imageSrc} alt="Project" style={{ width: '100%' }} /> {/* Display the project image */}
                <button onClick={onClose}>Close</button> {/* Close button */}
            </div>
        </div>
    );
};

export default Modal; // Export the Modal component
