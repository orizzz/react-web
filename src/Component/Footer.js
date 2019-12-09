import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-router-dom/NavLink';
import '../css/App.css';

import { Icon } from 'react-icons-kit'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare'
import {instagram} from 'react-icons-kit/fa/instagram'


class Footer extends Component {
    render() {
        return (
        <div id="footerView">
            <div className="container py-3 d-flex">
                <Nav justify className="flex-column mx-2">
                    <div className="h5 text-light">Lokasi Populer</div>
                    <NavLink className="p-1" to="/Search/Jakarta Barat">Jakarta Barat</NavLink>
                    <NavLink className="p-1" to="/Search/Jakarta Pusat">Jakarta Pusat</NavLink>
                    <NavLink className="p-1" to="/Search/Jakarta Selatan">Jakarta Selatan</NavLink>
                    <NavLink className="p-1" to="/Search/Jakarta Timur">Jakarta Timur</NavLink>
                    <NavLink className="p-1" to="/Search/Jakarta Utara">Jakarta Utara</NavLink>
                </Nav>
                <Nav className="flex-column ml-auto">
                    <div className="h5 text-light">Sosial Media</div>
                    <Nav.Link href="#"><Icon className="text-white mx-auto" size={24} icon={facebookSquare} /> </Nav.Link>
                    <Nav.Link href="#"><Icon className="text-white mx-auto" size={24} icon={twitterSquare} /> </Nav.Link>
                    <Nav.Link href="#"><Icon className="text-white mx-auto" size={24} icon={instagram} /> </Nav.Link>
                </Nav>
            </div>
        </div>
        );
    }
}

export default Footer;
