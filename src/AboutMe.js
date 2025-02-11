import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCloudflare } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

function AboutMe() {

    // dynamic div width
    const [width, setWidth] = useState('80%'); // Default width

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setWidth('80%'); // Small screens
            } else if (window.innerWidth >= 600 && window.innerWidth <= 1024) {
                setWidth('70%'); // Medium screens
            } else {
                setWidth('50%'); // Large screens
            }
        };

        // Set initial width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div 
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)', // Center both horizontally and vertically
                color: '#003366', // Dark blue color
                textAlign: 'center',
                padding: '20px',
                borderRadius: '15px', // Rounded corners for a softer look
                backdropFilter: 'blur(10px)', // Frosted glass effect
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
                border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                width: width, // Limit the width for better readability
                margin: '0 auto', // Center the container
                fontSize: '1.2em', // Larger font size
            }}
        >
            <h2>About Me</h2>
            <p style={{ textAlign: 'justify', lineHeight: '2' }}> {/* Justify the paragraph text */}
                Master of IT student with 3+ years of hands-on expertise in <b>AI, DevOps, and Full-Stack development</b>. Proven adaptability and collaboration skills through internships, alongside exceptional academic achievements. Delivered scalable solutions across insurance (firewall alerts automation), manufacturing (coating defects detection), and logistics (cloud resources management). Australian Permanent Resident (full working rights).
            </p>

            {/* Social Media Icons */}
            <div style={{ marginTop: '20px' }}>
                <a 
                    href="https://www.linkedin.com/in/rain-poon-717479207" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ margin: '0 20px', color: '#0077B5', textDecoration: 'none' }}
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a 
                    href="https://github.com/Rain-Poon" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ margin: '0 20px', color: '#333', textDecoration: 'none' }}
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>

            {/* OneDrive Link */}
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesomeIcon 
                    icon={faCloudflare} 
                    size="1x" 
                    style={{ marginRight: '10px', color: '#0078D4' }} // OneDrive-like blue color
                />
                <a 
                    href="https://unimelbcloud-my.sharepoint.com/:b:/g/personal/rainp_student_unimelb_edu_au/ETj9omYMlf5HiGrjZLthWewBjqdihKPhTDlwFJDhsACzqQ?e=hc5m7D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: '#003366', textDecoration: 'none' }}
                >
                    Please find my CV here
                </a>
            </div>
        </div>
    );
}

export default AboutMe;