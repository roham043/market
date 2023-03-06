import React from 'react';
import MainPageHeader from '../../MainPage-Header/MainpageHeader';
import MainPageFeatures from '../../MainPage-Features/MainPage-Features';


import Directory from '../../directory/directory.component';

const HomePage = (props) => {
    console.log(props)
    return (

        <div className="container-fluid">
            <MainPageHeader />
            <MainPageFeatures />
            <Directory />
        </div>

    )
}

export default HomePage;