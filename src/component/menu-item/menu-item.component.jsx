import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { withRouter,useRouteMatch } from 'react-router-dom';
import Button from '@mui/material/Button';

const MenuItem = ({title,imageUrl,size,id,linkUrl,xs,ml,history}) => {
    // let {history} = useHistory();
    let {url} = useRouteMatch();
    
    return (
        <Grid item xs={xs} sx={{
            border: 1, mt: 3, ml: ml, display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'center',
            minHeight: size,
            backgroundSize: 'cover',
            ":hover": {
                cursor: 'pointer',
            },
        }}>
            
            {/* <div style={{backgroundImage:`url(${props.imageUrl})`,width: '100%',height:'100%',zIndex:10,boxSizing:'border-box',padding:0,backgroundSize:'cover'}}></div> */}
            <Box component="div"  sx={{
                border: '1px solid gray ', display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
                mb: 2,
                maxWidth: { xs: 40, lg: 100 },
                borderRadius: '12px',
                opacity: 0.7,
                backgroundColor: 'white',
                ":hover": {
                    opacity: 0.9,
                },
            }}>
                
                <Box component="h3" sx={{ color: 'black', display: 'flex', my: 0, fontSize: { xs: 12, lg: 20 } }}>
                    {title.toUpperCase()}
                </Box>
                <Button onClick={() => history.push(`${url}${linkUrl}`)}>
                <Box component="span" sx={{ color: 'black', display: 'flex',":hover": {
                    color:'#ff66cc',
                }, }}>
                    Shop now
                </Box>
                </Button>
            </Box>

        </Grid>
    )
}
export default withRouter(MenuItem);