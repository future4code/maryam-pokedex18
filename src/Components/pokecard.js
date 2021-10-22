import React        from "react";
import Avatar       from '@mui/material/Avatar';
import Typography   from '@mui/material/Typography';
import Box          from '@mui/material/Box';




const PokeCard = (props) =>{

    return (
        <Box>

            <Box
            sx={ { 
                bgcolor: 'primary.lighter',
                width:          '100%',
                height:         '100vh',

            }}> 

                <Avatar alt={props.name} src={props.photo}  sx={{ width: 48, height: 48 }} />
            </Box>

            <Box>
                <Typography variant="h6"> {props.name} </Typography>
            </Box>    
                
        </Box>
    )
}

export default PokeCard