import React from 'react';

import Header from 'body/Header';
import Navbar from 'body/Navbar';
import Page from 'body/Page';
import Footer from 'body/Footer';

export default class Body extends React.Component {
    render() {
        return (
            <div className='body'>
                <Header />
                <Navbar />
                <Page />
                <Footer />
            </div>
        );
    }
}
