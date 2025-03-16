// TypingAnimation.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import data from './database.json'; // Adjust the path if necessary

const TypingAnimation = () => {
    return (
        <div style={{
            position: 'absolute',
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            zIndex: 1
        }}>
             <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)', // Center the text
                color: '#003366', // Dark blue color
                fontSize: '2em',
                fontWeight: 'bold', // Make text bold
                textAlign: 'center'
            }}>
                Welcome to my Portfolio! <br />
                I am Rain, {' '}
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        ...data.animations.map(animation => [animation, 1000]).flat(),
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                />
            </div>
            <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#f0f0f0', // Dark blue color
                fontSize: '1.5em',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Scroll to continue <br />
                <span style={{ fontSize: '1em' }}>↓</span>
            </div>
        </div>
       
    
    );
};

export default TypingAnimation;