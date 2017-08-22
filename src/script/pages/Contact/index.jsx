import React from 'react';

import pageTitle from 'react-document-title-decorator';

// import CSSModules from 'react-css-modules';
// import styles from './style.css';

import { Input, Textarea } from 'components/Form';
import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Contact')
// @CSSModules(styles)
export default class Home extends React.Component {
    render() {
        return (
            <article>
                <PortfolioCard
                    title='Contact'
                >
                    <form>
                        <Input title='Name' required />
                        <Input title='Email Address' required />
                        <Input title='Phone Number' />
                        <Textarea title='Message' />
                    </form>
                </PortfolioCard>
            </article>
        );
    }
}
