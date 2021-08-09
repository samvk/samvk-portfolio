import React from 'react';

import pageTitle from 'react-document-title-decorator';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Flex from 'components/Flex';
import PortfolioCard from 'components/PortfolioCard';
import ProjectCard from 'components/ProjectCard';

@pageTitle('Projects')
@CSSModules(styles, { allowMultiple: true })
export default class Projects extends React.Component {
    render() {
        return (
            <article className='page xl'>
                <PortfolioCard
                    title='Projects'
                >
                    <h1 styleName='header'>For the Web</h1>
                    <Flex wrap styleName='grid'>
                        <ProjectCard
                            featured
                            name='Konica Minolta Personalize'
                            href='https://getpersonalize.com'
                            src='projects/konicaminoltapersonalize.png'
                        />
                        <ProjectCard
                            featured
                            name='Konica Minolta Marketplace'
                            href='https://us.konicaminoltamarketplace.com'
                            src='projects/konicaminoltamarketplace.png'
                        />
                        <ProjectCard
                            name='Greetings, World!'
                            href='https://greetingsworld.us'
                            github='https://github.com/samvk/postcard-creator'
                            src='projects/greetingsworld.png'
                        />
                        <ProjectCard
                            name='The Treasure Hunter'
                            href='https://cttreasurehunter.com'
                            github='https://github.com/samvk/cttreasurehunter'
                            src='projects/cttreasurehunter.png'
                        />
                        <ProjectCard
                            name='Read Every Day!'
                            href='https://readeverydayclub.com'
                            github='https://github.com/samvk/readeveryday'
                            src='projects/readeveryday.png'
                        />
                        <ProjectCard
                            name='Date Russell'
                            href='https://daterussell.com'
                            github='https://github.com/samvk/daterussell'
                            src='projects/daterussell.png'
                        />
                        <ProjectCard
                            name='SamVK | My Portfolio'
                            href='https://samvk.com'
                            github='https://github.com/samvk/samvk-portfolio'
                            src='projects/samvk.png'
                        />
                        <ProjectCard
                            name='SamVK | My Portfolio (original)'
                            href='https://original.samvk.com'
                            github='https://github.com/samvk/samvk-portfolio-original'
                            src='projects/samvkoriginal.png'
                        />
                    </Flex>
                    <h1 styleName='header'>Just for Fun</h1>
                    <Flex wrap styleName='grid'>
                        <ProjectCard
                            featured
                            name='Google Assistant'
                            href='https://assistant.google.com/explore/search?q=SamVK'
                            github='https://github.com/samvk?tab=repositories&q=actions-on-google'
                            src='projects/googleassistant.png'
                        />
                        <ProjectCard
                            featured
                            name='Chrome Web Store'
                            href='https://chrome.google.com/webstore/search/SamVK?_category=extensions'
                            github='https://github.com/samvk?tab=repositories&q=chrome-extension'
                            src='projects/chromewebstore.png'
                        />
                        <ProjectCard
                            audio
                            name='Team Fortress 2'
                            href='https://teamfortress2.samvk.com'
                            github='https://github.com/samvk/teamfortress2'
                            src='projects/teamfortress2.png'
                        />
                        <ProjectCard
                            name='Snake'
                            href='https://snake.samvk.com'
                            github='https://github.com/samvk/snake'
                            src='projects/snake.png'
                        />
                        <ProjectCard
                            name='Metal Detecting'
                            href='https://cttreasurehunter.com/metaldetecting'
                            github='https://github.com/samvk/metaldetecting'
                            src='projects/metaldetecting.png'
                        />
                    </Flex>
                </PortfolioCard>
            </article>
        );
    }
}
