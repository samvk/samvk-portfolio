import React from 'react';
import axios from 'axios';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import { Form, Input, Textarea, Button } from 'components/Form';
import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Contact')
@CSSModules(styles)
export default class Home extends React.Component {

    state = {
        form: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        status: 'Submit',
    }

    handleInputChange = ({ target }) => {
        const { name, value } = target;

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
                            this.setState(() => ({ status: 'pending' }));

                            const formData = this.state.form;
                            axios.post('/api/contact.php', formData).then(({ data }) => {
                                console.log(data);
                                this.setState(() => ({ status: data.message }));
                            }).catch((err) => {
                                this.setState(() => ({ status: 'Something went wrong.' }));
                                console.error(err);
                            });
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
                        <Button
                            className='button full-width'
                            type='submit'
                            pending={this.state.status === 'pending'}
                        >
                            {this.state.status}
                        </Button>
                    </Form>
                </PortfolioCard>
            </article>
        );
    }
}
