import React, { useRef } from 'react';
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
import { AiFillMessage } from 'react-icons/ai';
import { SiPytorch } from 'react-icons/si';
import { TbFileUnknown } from 'react-icons/tb';
import { PiBinaryFill } from 'react-icons/pi';

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
    image: `${process.env.PUBLIC_URL}/green.png`,
    skills: ['React', 'Nodejs', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'GitHub', 'LLM'],
  },
  {
    title: 'DineNoSore',
    image: `${process.env.PUBLIC_URL}/DineNoSore.jpg`,
    skills: ['Swift', 'MongoDB', 'Flask', 'GitHub'],
  },
  {
    title: 'Face Verification',
    image: `${process.env.PUBLIC_URL}/faceVerification.png`,
    skills: ['Python', 'PyTorch', 'GitHub', 'VisionTransformer'],
  },
  {
    title: 'Azul AI Agent',
    image: `${process.env.PUBLIC_URL}/azul.jpg`,
    skills: ['Python', 'PyTorch', 'GitHub', 'Algorithm'],
  },
  {
    title: 'LoungePass',
    image: `${process.env.PUBLIC_URL}/LoungePass.png`,
    skills: ['Swift', 'MongoDB', 'Flask', 'GitHub'],
  },
  {
    title: 'Lung Cancer Detection',
    image: `${process.env.PUBLIC_URL}/lungCell.png`,
    skills: ['Python', 'PyTorch', 'GitHub', 'CNN'],
  },
  {
    title: 'Cathay Plus',
    image: `${process.env.PUBLIC_URL}/cathay.png`,
    skills: ['React', 'Nodejs', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'GitHub', 'AWS'],
  },
];

export default function ProjectGallery() {
  // Create a reference to the inner scrollable container.
  const scrollContainerRef = useRef(null);

  // onWheel handler on the scrollable container
  const handleWheel = (event) => {
    const container = scrollContainerRef.current;
    if (!container) return;
  
    const { scrollTop, scrollHeight, clientHeight } = container;
    const delta = event.deltaY;
  
    // Check if the container can scroll further in the intended direction.
    if (
      (delta > 0 && scrollTop + clientHeight < scrollHeight) ||
      (delta < 0 && scrollTop > 0)
    ) {
      // Allow the container to scroll naturally
      event.stopPropagation();
    }
    // Otherwise, let the event bubble up for global page change.
  };

  return (
    // Outer container for centering.
    <div
      style={{
        position: 'absolute', // Positioned relative to the viewport.
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: '80%',
          margin: 'auto', // Center the container
          borderRadius: '15px', // Rounded corners
          backdropFilter: 'blur(10px)', // Frosted glass effect
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
          border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow
          p: 2,
        }}
      >
        {/* This Box is the scrollable container */}
        <Box
          ref={scrollContainerRef}
          onWheel={handleWheel}
          sx={{
            maxHeight: '80vh',
            overflowY: 'auto',
            p: 2,
          }}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: '15px' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5">{project.title}</Typography>
                    <div style={{ marginTop: '10px' }}>
                      {project.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          icon={skillIcons[skill]}
                          label={skill}
                          size="small"
                          style={{ margin: '5px 5px 5px 0' }}
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