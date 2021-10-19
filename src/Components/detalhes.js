import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Detalhes() {
    return (

        <Box
        sx={ { 
            bgcolor: 'primary.darker',
            width:          '100%',
            height:         '100vh',
            display:        'flex',
            flexDirection:  'column',
            justifyContent: 'flex-start',
            alignItems:     'center',
            m:              -0,
            p:              -0,
            
        }}>
        <br/>
    
    
            <Typography variant="h1"> Detalhes </Typography>
    
    
    
    
            <Box sx={ {  marginTop: 50 }}>
                <Typography variant="h6">Renderização dos detalhes  </Typography>
            </Box>
    
            <Button>Voltar</Button>
        </Box>
    
    );
    }
    