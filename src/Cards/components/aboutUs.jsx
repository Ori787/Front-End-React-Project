import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import { bgcolor } from '@mui/system';

const AboutPage = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 1500);


    return () => clearTimeout(titleTimeout);
  }, []);

  return (
    <>
      <CssBaseline /> 
      <Box
        className="about-page"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          textAlign: 'center',
        }}
      >

          <Typography variant="h4" color="textPrimary" gutterBottom>
            Welcome to MyBiz, The home of business promotion.
          </Typography>

{showTitle && (
        <Typography
          variant="body1"
          paragraph
          sx={{ transition: 'opacity 0.5s ease-in-out', marginTop: '10px', fontWeight: 'bold' }}
        >
          In our website,
           a registered business account can create a unique,
           online business card
          which will be presented to the website visitors. Moreover, you can click 'like' on another
          business cards and add them directly to your favourite cards page.
        </Typography>
                )}
      </Box>
    </>
  );
};

export default AboutPage;
