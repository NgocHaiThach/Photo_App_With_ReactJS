import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';

import './Header.scss'

Header.propTypes = {};

function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="https://www.facebook.com/haitac.ks/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TNH
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/sign-in"
                            activeClassName="header__link--active"
                        >
                            Login
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;