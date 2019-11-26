import React, { Component } from 'react';
import logo from '../logo.svg';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import '../css/App.css';

import { Icon } from 'react-icons-kit'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare'
import {instagram} from 'react-icons-kit/fa/instagram'


class Footer extends Component {
    render() {
        return (
        <Navbar id="footerView">
            <div className="container py-3">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse >
                <Nav justify className="flex-column mx-2">
                    <div className="h5 text-light">Lokasi Populer</div>
                    <Nav.Link className="" href="#">Jakarta Barat</Nav.Link>
                    <Nav.Link className="" href="#">Jakarta Pusat</Nav.Link>
                    <Nav.Link className="" href="#">Jakarta Selatan</Nav.Link>
                    <Nav.Link className="" href="#">Jakarta Timur</Nav.Link>
                    <Nav.Link className="" href="#">Jakarta Utara</Nav.Link>
                </Nav>
                
                </Navbar.Collapse>
                <Nav className="flex-column">
                    <div className="h5 text-light">Sosial Media</div>
                    <Nav.Link href="#"><Icon className="text-white mx-auto" size={24} icon={facebookSquare} /> </Nav.Link>
                    <Nav.Link href="#"><Icon className="text-white mx-auto" size={24} icon={twitterSquare} /> </Nav.Link>
                    <Nav.Link href="#"><Icon className="text-white mx-auto" size={24} icon={instagram} /> </Nav.Link>
                </Nav>
            </div>
        </Navbar>
        );
    }
}

export default Footer;
