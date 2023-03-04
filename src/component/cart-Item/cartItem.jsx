import * as React from 'react';
import Box from '@mui/material/Box';


export default function CartItem({item:{id,name,imageUrl,price,quantity}}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        bgcolor: '#e6e6e6',
        overflow: 'hidden',
        boxShadow: 1,
        fontWeight: 'bold',
        
      }}
    >
      <Box
        component="img"
        sx={{
          height: 100,
          width: 150,
          m:1
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={imageUrl}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          width:100
          // minWidth: { md: 200 },
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          {name}
        </Box>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          {price*quantity}$({quantity})
        </Box>
      
      </Box>
    </Box>
  );
}