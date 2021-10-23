import React,{useState}  from 'react';
import {useHistory}       from 'react-router-dom';
import useRequestData     from '../Hooks/useRequestData';

import Typography         from '@mui/material/Typography';
import Box                from '@mui/material/Box';
import Button             from '@mui/material/Button';
import ButtonGroup        from '@mui/material/Button';
import Pagination         from '@mui/material/Pagination';







export default function Home() {

  const history = useHistory()

  const [page, setPage] = useState(1);
  const [URL, setURL]   = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
  const [list,setList]  = useState('')

  const pokemonsList    = useRequestData(URL,[])

  const mudaPagina = (event, value) => {
    setPage(value);
    setURL(`https://pokeapi.co/api/v2/pokemon?offset=${(page-1)*20}&limit=20`);
  }

  pokemonsList? console.log(pokemonsList):console.log('')

  const gotoDetail = (name) => {
    history.push(`/detalhes/${name}`)
  }


  const renderizaPag = () => {


    return(  
      pokemonsList.results  && URL &&
      pokemonsList.results.map(  (poke) =>  {
        return <Button variant='contained' onClick = {() => gotoDetail(poke.name)} key={poke.name}> {poke.name} </Button> 
      })

    )

  }






  
  return(

    <Box
    sx={ { 
        bgcolor: 'primary.darker',
        width:          '100%',
        height:         'auto',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'flex-start',
        alignItems:     'center',
        m:              -0,
        p:              -0,
        
    }}>
    <br/>
    
        <Typography variant="h1">Pokedex </Typography>

    
    
    
        <Box sx= { {  marginTop: 10 }}>

          <ButtonGroup color='info' variant="contained" aria-label="outlined primary button group">
              <Typography variant="h6">{renderizaPag()} </Typography>
          </ButtonGroup>

        </Box>

        <br/>



    
    </Box>
  );
};
/*
        <Pagination count={5} variant="outlined" color="secondary" size = "large" page={page} onChange={mudaPagina}/>
        <Typography variant="h6">Page: {page}</Typography>
        */