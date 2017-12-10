import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import About from 'pages/About';
import Projects from 'pages/Projects';
import Contact from 'pages/Contact';
import FourOhFour from 'pages/FourOhFour';

export default class Page extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contact' component={Contact} />
                <Route component={FourOhFour} />
            </Switch>
        );
    }
}
