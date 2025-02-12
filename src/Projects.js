import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Chip, Grid } from '@mui/material';
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaJs,
    FaHtml5,
    FaCss3,
    FaPython,
    FaSwift,
    FaServer,
    FaNetworkWired,
    FaGithub,
    FaAws,
} from 'react-icons/fa';
import { AiFillMessage } from "react-icons/ai";
import { SiPytorch } from "react-icons/si";
import { TbFileUnknown } from "react-icons/tb";
import { PiBinaryFill } from "react-icons/pi";

// Skill-to-icon mapping
const skillIcons = {
    React: <FaReact />,
    Nodejs: <FaNodeJs />,
    MongoDB: <FaDatabase />,
    JavaScript: <FaJs />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Python: <FaPython />,
    Swift: <FaSwift />,
    Flask: <FaServer />,
    PyTorch: <SiPytorch />,
    GitHub: <FaGithub />,
    LLM: <AiFillMessage />,
    VisionTransformer: <TbFileUnknown />,
    CNN: <TbFileUnknown />,
    AWS: <FaAws />,
    Algorithm: <PiBinaryFill />,
};

const projects = [
    {
        title: 'GreenPricePlus',
        image: 'https://placehold.co/300',
        skills: ['React', 'Nodejs', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'GitHub', 'LLM'],
    },
    {
        title: 'DineNoSore',
        image: 'https://placehold.co/300',
        skills: ['Swift', 'MongoDB', 'Flask', 'GitHub'],
    },
    {
        title: 'Face Verification',
        image: 'https://placehold.co/300',
        skills: ['Python', 'PyTorch', 'GitHub', 'VisionTransformer'],
    },
    {
        title: 'Azul AI Agent',
        image: 'https://placehold.co/300',
        skills: ['Python', 'PyTorch', 'GitHub', 'Algorithm'],
    },
    {
        title: 'LoungePass',
        image: 'https://placehold.co/300',
        skills: ['Swift', 'MongoDB', 'Flask', 'GitHub'],
    },
    {
        title: 'Lung Cancer Detection',
        image: 'https://placehold.co/300',
        skills: ['Python', 'PyTorch', 'GitHub', 'CNN'],
    },
    {
        title: 'Cathay Plus',
        image: 'https://placehold.co/300',
        skills: ['React', 'Nodejs', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'GitHub', 'AWS'],
    },
];

export default function ProjectGallery() {
    return (
        // Outer container with flexbox for centering
        <div 
            style={{
                position: 'absolute',           // Position the container
                display: 'flex',               // Enable flexbox
                justifyContent: 'center',      // Center horizontally
                alignItems: 'center',          // Center vertically
                minHeight: '100vh',            // Full viewport height to ensure vertical centering
                zIndex: 1
            }}
        >
            {/* Inner Box (your original Box) */}
            <Box sx={{
                maxWidth: '80%', 
                padding: '50px', 
                maxHeight: '100vh', 
                margin: 'auto',                 // Center the container
                borderRadius: '15px',           // Rounded corners for a softer look
                backdropFilter: 'blur(10px)',   // Frosted glass effect
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
                border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',    // Soft shadow for depth
                padding: '20px',                // Add padding for better readability
            }}>
                <Box sx={{ maxHeight: '80vh', overflowY: 'auto', p: 2 }}>
                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{borderRadius: '15px'}}>
                                    <CardMedia component="img" height="140" image={project.image} alt={project.title} />
                                    <CardContent>
                                        <Typography variant="h5">{project.title}</Typography>
                                        <div style={{ marginTop: '10px' }}>
                                            {project.skills.map((skill, idx) => (
                                                <Chip
                                                    key={idx}
                                                    icon={skillIcons[skill]}
                                                    label={skill}
                                                    size="small"
                                                    style={{ margin: '5px 5px 5px 0px' }}
                                                />
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}