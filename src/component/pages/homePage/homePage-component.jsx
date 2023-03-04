import React from 'react';
import Container from '@mui/material/Container';

import Directory from '../../directory/directory.component';

const HomePage = (props) => {
    console.log(props)
    return (
        <Container maxWidth="lg" >
           <Directory/>
        </Container>
    )
}

export default HomePage;