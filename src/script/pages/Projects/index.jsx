import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Flex from 'components/Flex';
import PortfolioCard from 'components/PortfolioCard';
import ProjectCard from 'components/ProjectCard';

@pageTitle('Projects')
@CSSModules(styles, { allowMultiple: true })
export default class Home extends React.Component {
    render() {
        return (
            <article className='page xl'>
                <PortfolioCard
                    title='Projects'
                >
                    <h1>For the Web</h1>
                    <Flex wrap styleName='grid'>
                        <ProjectCard
                            featured
                            name='Konica Minolta Marketplace'
                            href='https://us.konicaminoltamarketplace.com'
                            src='projects/konicaminoltamarketplace.png'
                        />
                        <ProjectCard
                            name='Greetings, World!'
                            href='https://greetingsworld.us'
                            src='projects/greetingsworld.png'
                        />
                        <ProjectCard
                            name='The Treasure Hunter'
                            href='https://cttreasurehunter.com'
                            src='projects/cttreasurehunter.png'
                        />
                        <ProjectCard
                            name='Read Every Day!'
                            href='https://readeverydayclub.com'
                            src='projects/readeveryday.png'
                        />
                        <ProjectCard
                            name='Date Russell'
                            href='https://daterussell.com'
                            src='projects/daterussell.png'
                        />
                        <ProjectCard
                            name='SamVK | My Portfolio'
                            href='https://samvk.com'
                            src='projects/samvk.png'
                        />
                    </Flex>
                    <h1>Just for Fun</h1>
                    <Flex wrap styleName='grid'>
                        <ProjectCard
                            audio
                            name='Team Fortress 2'
                            href='https://teamfortress2.samvk.com'
                            src='projects/teamfortress2.png'
                        />
                        <ProjectCard
                            name='Snake'
                            href='https://snake.samvk.com'
                            src='projects/snake.png'
                        />
                        <ProjectCard
                            name='Metal Detecting'
                            href='https://cttreasurehunter.com/metaldetecting'
                            src='projects/metaldetecting.png'
                        />
                    </Flex>
                </PortfolioCard>
            </article>
        );
    }
}
