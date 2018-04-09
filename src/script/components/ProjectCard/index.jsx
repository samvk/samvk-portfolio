import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CSSModules from 'react-css-modules';
import styles from './style.css';

import Image from 'components/Image';
import Link from 'components/Link';
import Flex from 'components/Flex';
import Logo from 'components/Logo';

@CSSModules(styles, { allowMultiple: true })
export default class ProjectCard extends React.Component {
    static propTypes = {
        audio: PropTypes.bool, // mark if link will have sound
        featured: PropTypes.bool,
        github: PropTypes.string,
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
    }

    static defaultProps = {
        featured: false,
        github: null,
    }


    render() {
        const { audio, featured, github, name, href, src, ...props } = this.props;
        return (
            <div
                styleName='container'
                {...props}
            >
                <Link
                    className='relative'
                    styleName='image-wrapper'
                    href={href}
                >
                    <Image
                        styleName={classNames('image', { featured })}
                        src={src}
                        alt={name}
                    />
                    {audio && <Logo styleName='audio' logo='volume-up' />}
                </Link>
                <Flex xCenter>
                    {github && <Logo
                        styleName='logo'
                        logo='github-square'
                        href={github}
                        title='GitHub'
                        text
                    />}
                </Flex>
            </div>
        );
    }
}
