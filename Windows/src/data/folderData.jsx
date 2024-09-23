import React, { useState } from 'react'; // Import React and useState hook for managing component state
import samsara from '../assets/img/samsara.png'; // Importing images for experience section
import makers from '../assets/img/makers.png';
import equinix from '../assets/img/equnix.png';
import gmailClone from '../assets/img/gmailClone.png';
import shoppingCart from '../assets/img/shopping-cart.png';
import ticTac from '../assets/img/ticTac-Toe.png';
import quiz from '../assets/img/quiz.png';
import weather from '../assets/img/weather.png';
import clock from '../assets/img/clock.png';
import calculator from '../assets/img/calculator.png';
import Modal from '../components/Modal'; // Importing the Modal component for displaying project images

// Component to display the projects section
const ProjectSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the currently selected image

    // Array of projects with their names and corresponding images
    const projects = [
        { name: 'Gmail Clone', image: gmailClone },
        { name: 'Shopping Cart', image: shoppingCart },
        { name: 'Tic Tac Toe', image: ticTac },
        { name: 'Quiz Project', image: quiz },
        { name: 'Weather Project', image: weather },
        { name: 'Clock', image: clock },
        { name: 'Calculator', image: calculator },
    ];

    // Function to handle image click, opening the modal
    const handleImageClick = (image) => {
        setSelectedImage(image); // Set the selected image
        setIsModalOpen(true); // Open the modal
    };

    return (
        <div>
            <h2>My Projects</h2> {/* Title for the projects section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {/* Map through projects and render each one */}
                {projects.map((project, index) => (
                    <div key={index} onClick={() => handleImageClick(project.image)}>
                        <img
                            src={project.image} // Image source
                            alt={project.name} // Alternative text for the image
                            style={{ width: '100%', height: 'auto', cursor: 'pointer' }} // Styles for the image
                        />
                        <p>{project.name}</p> {/* Project name */}
                    </div>
                ))}
            </div>
            {/* Render the Modal component if the modal is open */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageSrc={selectedImage} />
        </div>
    );
};

// Main folder data array containing different sections
const folderData = [
    {
        name: 'About Me',
        content: (
            <div>
                <h1>Amantur Kubanychbekov</h1>
                <p>
                    I am a motivated Frontend Developer and recent graduate eager to grow and make an impact in the tech industry.
                    With a solid foundation in HTML, CSS (Sass), and JavaScript (ES6/TypeScript), I have successfully built and optimized
                    responsive web applications using React and Node.js.
                    I thrive in collaborative environments and am committed to writing clean code while continuously learning and improving. <br /><br />
                    I also bring a unique perspective from my background in sales, where I streamlined processes and analyzed customer data to support team goals. This combination of technical skills and business insight fuels my passion for creating user-friendly, high-performance web interfaces. <br /><br />
                </p>
            </div>
        ),
    },
    {
        name: 'Experience',
        content: (
            <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '10px' }}>
                {/* Experience Item 1 */}
                <div style={{ display: 'grid', gridTemplateColumns: '90px auto', gap: '10px', marginBottom: '20px' }}>
                    <img
                        className='icon'
                        src={samsara} // Icon for Samsara
                        alt="Samsara Icon"
                        style={{ width: '55px', height: '50px', alignSelf: 'start', cursor: 'pointer' }}
                    />
                    <div>
                        <h3 style={{ margin: 0 }}>Samsara: Frontend Developer</h3>
                        <p style={{ margin: 0, color: 'gray' }}>Jun 2023 - present</p> {/* Dates for experience */}
                    </div>
                </div>
                <p>
                    - Successfully integrated barcode scanning and offer quantity selection, leading to a 7% revenue increase.<br />
                    - Achieved a 25% reduction in AWS costs through asset optimization.<br />
                    - Collaborated with cross-functional teams to define, design, and implement new features.<br />
                    - Used JavaScript (ES6+) to build high-performance, user-friendly interfaces.
                </p>

                {/* Experience Item 2 */}
                <div style={{ display: 'grid', gridTemplateColumns: '90px auto', gap: '10px', marginBottom: '20px' }}>
                    <img
                        className='icon'
                        src={makers} // Icon for Makers
                        alt="Makers Icon"
                        style={{ width: '55px', height: '30px', alignSelf: 'start', cursor: 'pointer' }}
                    />
                    <div>
                        <h3 style={{ margin: 0 }}>Makers: Frontend Developer</h3>
                        <p style={{ margin: 0, color: 'gray' }}>Oct 2022 - May 2023</p>
                    </div>
                </div>
                <p>
                    - Developed and maintained responsive websites and interfaces using JavaScript, React, and Adobe Photoshop.<br />
                    - Integrated and optimized RESTful APIs for smooth data exchange between frontend and backend systems.<br />
                    - Conducted unit and integration tests to ensure application reliability and performance stability.<br />
                    - Employed HTML, CSS, and JavaScript (ES6+) for creating user-friendly, high-performance web interfaces.
                </p>

                {/* Experience Item 3 */}
                <div style={{ display: 'grid', gridTemplateColumns: '90px auto', gap: '10px', marginBottom: '20px' }}>
                    <img
                        className='icon'
                        src={equinix} // Icon for Equinix
                        alt="Equinix Icon"
                        style={{ width: '65px', height: '40px', alignSelf: 'start', cursor: 'pointer' }}
                    />
                    <div>
                        <h3 style={{ margin: 0 }}>Equinix: Sales Operating</h3>
                        <p style={{ margin: 0, color: 'gray' }}>Jul 2022 - Sep 2022</p>
                    </div>
                </div>
                <p>
                    - Streamlined sales processes to enhance operational efficiency.<br />
                    - Managed customer data and prepared comprehensive sales reports.<br />
                    - Contributed to the creation of sales strategies and conducted market research.<br />
                    - Utilized CRM software for tracking sales activities, analyzing performance, and generating insights.
                </p>
            </div>
        ),
    },
    {
        name: 'Projects',
        content: <ProjectSection />, // Use the ProjectSection component to render projects
    },
    {
        name: 'Games',
        content: (
            <div>
                <h2>Favorite Games</h2>
                <p>Here are some of my favorite games...</p>
            </div>
        ),
    },
    {
        name: 'Contacts',
        content: (
            <div>
                <h2>Contact Information</h2>
                <p>Here's how to contact me...</p>
            </div>
        ),
    },
    {
        name: 'Feedback',
        content: (
            <div>
                <h2>Feedback</h2>
                <p>Here's some feedback I received...</p>
            </div>
        ),
    },
];

// Export the folder data array for use in other components
export default folderData;
