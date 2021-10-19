import * as React from 'react';
import {useHistory} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';





export default function Header() {

    const history = useHistory()

    const gotoHome = () => {
        history.push("/")
    }

    const gotoPokedex = () => {
        history.push("/pokedex")
    }

    const gotoDetalhes = () => {
        history.push("/detalhes")
    }


    return (

        //<Box sx={{ bgcolor: 'primary.darker', flexGrow: 1, margin: 0, width: '100%',}}>
        <Box sx={{ bgcolor: 'primary.darker', color: 'primary.contrastText', m:0, }}>

        <AppBar position="static">
            <Toolbar>
            

            <Box
            sx={ { 
                width:          '100%',
                display:        'flex',
                justifyContent: 'space-around',
                alignItems:     'center',
                m:              -0,
                p:              -0,
                
            }}>


                <Box > 
                        <Typography  variant="h6" component="div" >
                            Logo
                        </Typography>
                </Box>


                <Box
                    sx={ { 
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginRight: -0, 
                    }}>

                        <Button variant="contained" color="secondary" onClick={ gotoHome    }>  Home           </Button>
                        <Button variant="contained" color="secondary" onClick={ gotoPokedex }>  Pokedex        </Button>
                        <Button variant="contained" color="secondary" onClick={ gotoDetalhes}>  Detalhes       </Button>

                </Box>


            </Box>


        </Toolbar>
        </AppBar>
        </Box>
    );
}