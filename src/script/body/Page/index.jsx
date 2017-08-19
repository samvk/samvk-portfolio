import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Resume from 'pages/Resume';
import Contact from 'pages/Contact';
import FourOhFour from 'pages/FourOhFour';

export default class Page extends React.Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/resume' component={Resume} />
                    <Route exact path='/contact' component={Contact} />
                    <Route component={FourOhFour} />
                </Switch>
            </div>
        );
    }
}
