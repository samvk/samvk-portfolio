import React from 'react';

import pageTitle from 'react-document-title-decorator';

// import CSSModules from 'react-css-modules';
// import styles from './style.css';

import { Form, Input, Textarea } from 'components/Form';
import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Contact')
// @CSSModules(styles)
export default class Home extends React.Component {

    state = {
        form: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    }

    handleInputChange = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.value;

        this.setState((state) => ({
            form: {
                ...state.form,
                [name]: value,
            },
        }));
    }

    render() {
        return (
            <article>
                <PortfolioCard
                    title='Contact'
                >
                    <Form
                        onSubmit={() => {
                        }}
                    >
                        <Input
                            title='Name'
                            name='name'
                            required
                            onChange={this.handleInputChange}
                        >
                            {this.state.name}
                        </Input>
                        <Input
                            title='Email Address'
                            name='email'
                            type='email'
                            required
                            onChange={this.handleInputChange}
                        >
                            {this.state.email}
                        </Input>
                        <Input
                            title='Phone Number'
                            name='phone'
                            onChange={this.handleInputChange}
                        >
                            {this.state.phone}
                        </Input>
                        <Textarea
                            title='Message'
                            name='message'
                            required
                            onChange={this.handleInputChange}
                        >
                            {this.state.message}
                        </Textarea>
                        <button
                            className='button full-width'
                            type='submit'
                        >
                            Submit
                        </button>
                    </Form>
                </PortfolioCard>
            </article>
        );
    }
}
