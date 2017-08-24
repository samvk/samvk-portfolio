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

    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    render() {
        return (
            <article>
                <PortfolioCard
                    title='Contact'
                >
                    <form>
                        <Input
                            title='Name'
                            required
                            onChange={(e) => {
                                const value = e.target.value;
                                this.setState(() => ({
                                    name: value,
                                }));
                            }}
                        >
                            {this.state.name}
                        </Input>
                        <Input
                            title='Email Address'
                            type='email'
                            required
                            onChange={(e) => {
                                const value = e.target.value;
                                this.setState(() => ({
                                    email: value,
                                }));
                            }}
                        >
                            {this.state.email}
                        </Input>
                        <Input
                            title='Phone Number'
                            onChange={(e) => {
                                const value = e.target.value;
                                this.setState(() => ({
                                    phone: value,
                                }));
                            }}
                        >
                            {this.state.phone}
                        </Input>
                        <Textarea
                            title='Message'
                            required
                            onChange={(e) => {
                                const value = e.target.value;
                                this.setState(() => ({
                                    message: value,
                                }));
                            }}
                        >
                            {this.state.message}
                        </Textarea>
                        <button className='full-width' type='submit'>Submit</button>
                    </form>
                </PortfolioCard>
            </article>
        );
    }
}
