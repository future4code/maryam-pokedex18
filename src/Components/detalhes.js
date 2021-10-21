import React            from 'react';
import {useParams}      from 'react-router-dom';
import useRequestData   from "../Hooks/useRequestData";
import {useHistory}     from 'react-router-dom';


import Typography       from '@mui/material/Typography';
import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';


export default function Detalhes() {
    const history   =   useHistory()
    const params    =   useParams()
    const pokemon   =   useRequestData(`https://pokeapi.co/api/v2/pokemon/${params.nome}`,{});



    const goBack = () => {
        history.push('/')
    }

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
                {console.log(pokemon)}

                {pokemon.sprites.front_default  &&    <img src={pokemon.sprites.front_default} alt={'pokemon sprite de frente'} />}
                {pokemon.name                   &&     <Typography variant="h6"> {pokemon.name}  </Typography>}



            </Box>
    
            <Button onClick={() => goBack()}>Voltar</Button>
        </Box>
    
    );
    }
    