import React from 'react';

// use title defined in HMTL head as the site name
const siteName = document.title;

const pageTitle = (title, delimiter, reverse = false) => ((PageComponent) => (
    class extends React.Component {
        updateTitle = (props) => {
            if (typeof title === 'function') {
                // build title with page component's props
                title = title(props);
            }
            if (typeof title !== 'string') {
                throw new TypeError('pageTitle must be passed a string or function returning a string.');
            }

            // default ' | ' delimiter (not declared as default param to allow other falsy args)
            delimiter = (typeof delimiter !== 'string') ? ' | ' : delimiter;

            // reversable title order
            const [primaryTitle, secondaryTitle] = reverse ? [siteName, title] : [title, siteName];

            document.title = primaryTitle + delimiter + secondaryTitle;
        }

        componentDidMount() {
            this.updateTitle(this.props);
        }

        componentWillReceiveProps(props) {
            this.updateTitle(props);
        }

        render() {
            return <PageComponent {...this.props} />;
        }
}));

export default pageTitle;
