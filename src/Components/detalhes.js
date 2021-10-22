import React            from 'react';
import {useParams}      from 'react-router-dom';
import useRequestData   from "../Hooks/useRequestData";
import {useHistory}     from 'react-router-dom';

import Typography       from '@mui/material/Typography';
import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';




export default function Detalhes() 
{
    const   history   =   useHistory()
    const   params    =   useParams()




    const pokemon   =   useRequestData(`https://pokeapi.co/api/v2/pokemon/${params.nome}`,{});
    

    console.log(pokemon)

    const goBack = () => {
        history.push('/')
    }



    function primeiraLetraMaiuscula(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const renderizaNome = () => {



            return(
                <Box 
                sx={ {  
                    marginTop:      2, 
                    border:         0,
                    width:          '70vw',
                    display:        'flex',
                    justifyContent: 'center',
                }}>

                    <Typography variant="h2"> {pokemon ? pokemon.name : 'Carregando'}  </Typography>
                    

                </Box>
            )   

    }




    const renderizaTipo = () => {


        return( 


        <Box 
        sx={{ 
            border:         1,
            maxWidth:       '80vw',
            maxHeight:      '10vh',
            display:        'flex',
            justifyContent: 'center'
        }}>

            <Box 
            sx={ {  
                marginTop:      2, 
                marginBottom:   0,
                marginLeft:     0,
                marginRight:    0,
                border:         1,
                width:          '75vw',
                maxHeight:      '5vh',
                display:        'flex',
                justifyContent: 'space-evenly',
                alignItens:     'center',
            }}>
                
                <Box sx={{}}>
                    <Typography variant="h3">{pokemon.types? pokemon.types[0].type.name : ''  }   </Typography>
                </Box>

                {pokemon.types? pokemon.types.length > 1? 
                            <Box>
                                <Typography variant="h3">{pokemon.types? pokemon.types.length > 1? pokemon.types[1].type.name:'' : ''  }   </Typography>
                            </Box>
                :'' : ''  
                }

            </Box>
            
        </Box>       
            
            )        
    }



    const renderizaStat = () => {


        return(
            <Box 
            sx={ {  
                marginTop:      2, 
                marginRight:    5,
                border:         0,
                width:          '35vw',
                maxHeight:      '45vh',
                display:        'flex',
                flexDirection:  'column',
                justifyContent: 'flex-start',
            }}>

                <Box sx={ {marginBottom: 3  }}>
                    <Typography variant="h3"> Status</Typography>
                </Box>

                
                <Typography variant="h6">HP: {pokemon.stats? pokemon.stats[0].base_stat: 'Carregando'  } </Typography>
                <Typography variant="h6">Ataque: {pokemon.stats? pokemon.stats[0].base_stat: 'Carregando'  } </Typography>
                <Typography variant="h6">Defesa: {pokemon.stats? pokemon.stats[1].base_stat: 'Carregando'  } </Typography>
                <Typography variant="h6">At. Especial: {pokemon.stats? pokemon.stats[2].base_stat: 'Carregando'  }</Typography>
                <Typography variant="h6">Df. Especial: {pokemon.stats? pokemon.stats[3].base_stat: 'Carregando'  } </Typography>
                <Typography variant="h6">Velocidade: {pokemon.stats? pokemon.stats[4].base_stat: 'Carregando'  } </Typography>                                
            </Box>
        )        
    }

    const renderizaGolpes = () => {
        return(
            <Box 
            sx={ {  
                marginTop:      2, 
                marginRight:    0,
                border:         0,
                width:          '75vw',
                maxHeight:      '35vh',
                display:        'flex',
                flexDirection:  'column',
                justifyContent: 'center',
            }}>

                <Box sx={ {marginBottom: 3  }}>
                    <Typography variant="h3"> Golpes</Typography>
                </Box>
                
                <Typography variant="h6">HP: {pokemon.stats? pokemon.stats[0].base_stat: 'Carregando'  } </Typography>
                <Typography variant="h6">Ataque: {pokemon.stats? pokemon.stats[0].base_stat: 'Carregando'  } </Typography>
                <Typography variant="h6">Defesa: {pokemon.stats? pokemon.stats[1].base_stat: 'Carregando'  } </Typography>
                <Typography variant="h6">At. Especial: {pokemon.stats? pokemon.stats[2].base_stat: 'Carregando'  }</Typography>
                <Typography variant="h6">Df. Especial: {pokemon.stats? pokemon.stats[3].base_stat: 'Carregando'  } </Typography>
                <Typography variant="h6">Velocidade: {pokemon.stats? pokemon.stats[4].base_stat: 'Carregando'  } </Typography>                                
            </Box>
        )        
    }


    return (

        <Box
        sx={ { 
            bgcolor: 'primary.darker',
            width:          '100%',
            display:        'flex',
            flexDirection:  'column',
            justifyContent: 'flex-start',
            alignItems:     'center',
            m:              -0,
            p:              -0,
            
        }}>
        <br/>
        <br/>

    
            <Button color='secondary' onClick={() => goBack()}>Voltar</Button>
            <Typography variant="h1"> Detalhes </Typography>



            <Card sx={{ marginTop: 5, width: '80vw', bgcolor: 'primary.darker' }}>

                <CardHeader
                    title=            {renderizaNome()}
                    subheader=        {renderizaTipo()}
                />


                <Box sx={{ display:        'flex',justifyContent: 'space-around',}}>
                    <CardMedia
                        component="img"
                        height="194"
                        image=            {pokemon.sprites ? pokemon.sprites.front_default : 'Carregando'}
                        alt=              {'Imagem do pokemon de frente'}
                    />

                    <CardMedia
                        component="img"
                        height="194"
                        image=            {pokemon.sprites ? pokemon.sprites.back_default : 'Carregando'}
                        alt=              {'Imagem do pokemon de costas'}
                    />
                </Box>


                <CardContent>
                    <Box 
                    sx={{
                        border:     1,
                        width:      '75vw', 
                        display:    'flex', 
                        alignItens: 'space-evenly'
                    }}>
                        <Box>
                            {renderizaStat()}
                        </Box>

                        <Box>
                            {renderizaGolpes()}
                        </Box>

                    </Box>
                </CardContent>



                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>



            </Card>
        </Box>
    
    );
    }
    

