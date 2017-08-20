import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Link from 'components/Link';
import PortfolioCard from 'components/PortfolioCard';

@pageTitle('Portfolio')
// @CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class Home extends React.Component {
    render() {
        return (
            <article>
                <PortfolioCard
                    title='Home'
                >
                    <div>
                        <p>
                            Hi, my name's Sam. I'm a twenty-something year old front-end web developer who loves building apps and bringing others' designs to life. My go-to technologies right now are HTML5, CSS3, Sass(SCSS), and JavaScript(ES6) + jQuery.  I'm in the process of learning PHP &amp; MySQL to become a better front-end coder and future full-stack developer.
                        </p>
                        <p>
                            On a personal note: I love metal detecting, watching movies, the theatre, and building things.
                        </p>
                        <p>
                            You can <Link
                                external
                                text
                                to='https://github.com/samvk'
                            >
                                check me out on GitHub
                            </Link>, <Link
                                external
                                text
                                to='https://linkedin.com/in/samvk'
                            >
                                find me on LinkedIn
                            </Link>, <Link
                                text
                                to='docs/SamKauffman_Resume.pdf'
                            >take a look at my resume</Link>, or view some of my projects below.
                        </p>
                    </div>
                </PortfolioCard>
            </article>
        );
    }
}
