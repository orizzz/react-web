import React, {Component} from 'react'

import banner_1 from '../img/carosel_1.jpg'
import wifi from '../img/facility/wifi.png'
import ac from '../img/facility/ac.png'
import service from '../img/facility/24.png'
import parking from '../img/facility/parking.png'
import shower from '../img/facility/shower.png'
import furniture from '../img/facility/couch.png'
import like from '../img/facility/like.png'
import quality from '../img/facility/quality.png'
import pay from '../img/facility/pay.png'

import { Parallax, Background } from 'react-parallax'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import NavLink from 'react-router-dom/NavLink';

  var carosel_item = [];
  for (var i = 1; i <= 3; i++) {
    carosel_item.push(
      <Carousel.Item>
          <img
            className="img d-block w-100 rounded"
            src={banner_1}
            alt="First slide"
            />
          <Carousel.Caption>
            <div className="p-2">
              <div className="h3">slide {i}</div>
              <div className="h6">Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
    );
  }


var rekom_item = [];
for (var i = 1; i <= 6; i++) {
  rekom_item.push(
    <div className="col-lg-4 col-6 h-100 my-2">
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

class Main extends Component{
render(){
    return(
        <div>
        <Parallax
            bgImage={require('../img/home_banner.jpg')}
            bgImageAlt="Home Banner"
            contentClassName="container py-5"
            strength={500}
        >  
          <div className="row" style={{ height: '480px' }}>
            <div className="col-lg-4">
              <div className="card p-3 border-0 shadow">
                <div className="h4 mx-auto mt-2">Cari Kost Dimana?</div>
                <div className="my-3">
                  <Form>
                      <InputGroup>
                          <FormControl type="text" placeholder="Cari Lokasi" />
                          <InputGroup.Append>
                              <Button variant="dark" type="submit">Cari</Button>
                          </InputGroup.Append>
                      </InputGroup>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card p-2 border-0 shadow">
                <Carousel indicators={false} >
                  {carosel_item}
                </Carousel>
              </div>
            </div>
          </div>
        </Parallax>
        
        <div className="container py-3">
          <div className="container-fluid d-flex pt-5 pb-3">
            <div className="h3 font-weight-bold mx-auto my-auto">Kost Di Jakarta</div>
          </div>
            <div className="row">
            
            {rekom_item}
            
            </div>
        </div>
        <div className="container-fluid bg-white border-0 shadow">
          <Card className="p-3 border-0">
            <div className="h3 font-weight-bold mx-auto my-auto">Fasilitas Kami</div>
          </Card>
          <div className="container">

            <div className="row bg-white px-5 pb-5">
              <div className="col-lg-2">
                <div className="p-1">
                  <img src={wifi} className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="p-1">
                  <img src={ac} className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="p-1">
                  <img src={service} className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="p-1">
                  <img src={parking} className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="p-1">
                  <img src={shower} className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="p-1">
                  <img src={furniture} className="img-fluid" />
                </div>
              </div>

          </div>
          
          </div>
        </div>       

            <Parallax
            blur={8}
            bgImage={require('../img/home_banner_2.jpg')}
            bgImageAlt="Home Banner"
            strength={500}
            >
              <div className="container">

              <div style={{ height: '480px' }}>
                <div className="text-light">
                  <div className="h1 text-center mt-4">Cari Kostmu di sini Sekarang</div>
                  <div className="row text-center">
                    <div className="col-lg-4">
                      <Card bg="transparent" className="p-5 border-0 my-2">
                      <Card.Img variant="top" src={like} />
                      <div className="h3 py-3">Kenyamanan Terjamin</div>
                      </Card>
                    </div>
                    <div className="col-lg-4">
                      <Card bg="transparent" className="p-5 border-0 my-2">
                      <Card.Img variant="top" src={quality} />
                      <div className="h3 py-3">Kualitas Terbaik</div>
                      </Card>
                    </div>
                    <div className="col-lg-4">
                      <Card bg="transparent" className="p-5 border-0 my-2">
                      <Card.Img variant="top" src={pay} />
                      <div className="h3 py-3">Pembayaran Mudah</div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Parallax>

      </div>
    );
}
}

export default Main