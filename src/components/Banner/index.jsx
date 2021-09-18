import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string,
};

function Banner(props) {
    const { title, backgroundUrl } = props

    const backgroundStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {}

    return (
        <section className="banner" style={backgroundStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    );
}

export default Banner;