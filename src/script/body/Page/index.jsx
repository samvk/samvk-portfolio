import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const pageLoad = (loader) => (Loadable({
    loader,
    loading: () => (null),
}));

const About = pageLoad(() => (import('pages/About')));
const Projects = pageLoad(() => (import('pages/Projects')));
const Contact = pageLoad(() => (import('pages/Contact')));
const FourOhFour = pageLoad(() => (import('pages/FourOhFour')));

@withRouter
export default class Page extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0); // scroll to top on page switch
        }
    }

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
