import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY ;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${scrollProgress}%`,
      height: '2px',
      backgroundColor: 'rgb(88, 250, 0)',
      borderRadius: '0px 5px 5px 0px', 
      zIndex: 2000,
    }} />
  );
};

export default ProgressBar;
