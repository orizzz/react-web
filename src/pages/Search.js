import React, { Component } from 'react';

import banner_1 from '../img/carosel_1.jpg'
import { Parallax } from 'react-parallax'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Card from 'react-bootstrap/Card'
import NavLink from 'react-router-dom/NavLink';

class Search extends Component {
    render() {
        return (
            <div>
                <Parallax
                bgImage={require('../img/home_banner.jpg')}
                bgImageAlt="Home Banner"
                strength={50}
                >
                    <div className="d-flex" style={{ height: '180px' }}>
                        <div className="container my-auto">
                        <Form className="mx-auto" >
                            <InputGroup>
                                <FormControl type="text" placeholder="Cari yang lain?" />
                                <InputGroup.Append>
                                    <Button variant="dark" type="submit">Cari</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        </div>
                    </div>
                </Parallax>
                
                <div className="container-fluid p-4">
                    <div className="row">
                        <div className="col-lg-2 col-12">
                            
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                {item}  
                            </div>
                        </div>
                        <div className="col-lg-2 col-12">
                            <div className="p-2">
                                <img 
                                src={banner_1} 
                                width="100%"
                                height="100%"
                                alt="" />
                                Ini Iklan
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

var item = [];
for (var i = 1; i <= 6; i++) {
    item.push(
    <div className="col-lg-4 col-md-6 col-12 h-100 my-2">
      <NavLink to="/Detail">
      <Card className="border-0 shadow-sm">
        <Card.Img variant="top" src={banner_1} /> 
        <Card.Body className="text-dark">
            <div className="h5">Ini nama</div>
            <div className="h6">Rp.2.000.000 /Bulan</div>
        </Card.Body>
      </Card>
      </NavLink>
    </div>
  );
}

export default Search;
