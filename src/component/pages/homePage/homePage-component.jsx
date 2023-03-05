import React from 'react';
import MainPageHeader from '../../MainPage-Header/MainpageHeader';
import Container from '@mui/material/Container';

import Directory from '../../directory/directory.component';

const HomePage = (props) => {
    console.log(props)
    return (
        <Container maxWidth="lg" >
            <MainPageHeader/>
           <Directory/>
        </Container>
    )
}

export default HomePage;