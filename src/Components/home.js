import React            from 'react';
import {useHistory}     from 'react-router-dom';
import Typography       from '@mui/material/Typography';
import Box              from '@mui/material/Box';
import useRequestData   from '../Hooks/useRequestData';
//import ImageListItemBar             from '@mui/material/ImageListItemBar';



export default function Home() {
  const history = useHistory()

  const gotoDetail = (name) => {
    history.push(`/detalhes/${name}`)
  }



  const URL                 =   'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const pokemonsList        =   useRequestData(URL,[])

  const pokemonsComponents  =   
    pokemonsList.results  &&
    pokemonsList.results.map(  (poke) =>  {
      return <button onClick = {() => gotoDetail(poke.name)} key={poke.name}> {poke.name}</button>
  });




  
  return(

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
    
        <Typography variant="h1">Pokedex </Typography>

    
    
    
        <Box sx= { {  marginTop: 50 }}>
            <Typography variant="h6">{pokemonsComponents} </Typography>
        </Box>
    
    </Box>
  );
};
