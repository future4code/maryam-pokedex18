import React, {useState,useEffect}  from 'react';
import Typography                   from '@mui/material/Typography';
import Box                          from '@mui/material/Box';
import axios                        from "axios"


export default function Home() {

  const [pokeLista,changePoke] = useState([])


  const pegaPokemon = () => {


    let i = 1
    let pokemon = []




    changePoke(pokemon)

  }


  useEffect( () => {
    pegaPokemon()
}, [])

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

      <Typography variant="h1">Lista de Pokémons  </Typography>




      <Box sx={ {  marginTop: 50 }}>
        <Typography variant="h6">Renderização da lista  </Typography>
      </Box>



      {    console.log(pokeLista.name) }
    </Box>

  );
}
