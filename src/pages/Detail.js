import React, { Component } from 'react';

import banner_1 from '../img/carosel_1.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Detail extends Component {
    render() {
        return (
        <div>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        
                    </div>
                    <div className="col-lg-8 col-12">
                    <div className="card border-0 p-3 my-3 shadow">
                        <div className="row">
                            <div className="col-lg-7">
                                <Carousel className="detail_gambar shadow my-2" indicators={false} >
                                {carosel_item}
                                </Carousel>
                            </div>
                            <div className="col-lg-5">
                                <Card className="border-0 my-2 shadow">
                                    <Card.Header>
                                        <div>
                                            Informasi
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="h5">Ini Nama Kost</div>
                                        <div className="h6">Ini Alamat Kost</div>
                                        <div className="h6">+62xxxxxxxxxx</div>
                                        <div className="h6 font-weight-normal justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget consequat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet feugiat nulla. </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <div className="h3 p-3">
                                Jenis Ruangan
                            </div>
                            <Card bg="danger" text="light" className="border-0 p-3 my-2">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img
                                        className="img d-block w-100 rounded"
                                        src={banner_1}
                                        alt="First slide"
                                        />
                                    </div>
                                    <div className="col-lg-4 p-4">
                                        <div className="h5 ">Kamar Tipe A</div>
                                        <div className="h5 ">Fasilitas</div>
                                        <ul>
                                            <li>Ac</li>
                                            <li>Wifi</li>
                                            <li>kamar Mandi</li>
                                            <li>Tv</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 p-4">
                                        <div className="h3 ">Rp. 2.000.000 /Bulan</div>
                                        <div className="h4 ">Rp. 70.000 /Hari</div>
                                    </div>
                                    <div className="w-100 pr-3 d-flex justify-content-end">
                                        <Button variant="light">Pesan Sekarang</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>   
                    </div>
                    <div className="col-lg-2 col-12">
                        <div className="p-2 m-2" >
                            <img 
                            src={banner_1} 
                            width="100%"
                            height="100%"
                            alt=""/>
                            Ini Iklan
                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

var carosel_item = [];
  for (var i = 1; i <= 3; i++) {
    carosel_item.push(
      <Carousel.Item >
          <img
            className="img d-block w-100 rounded"
            src={banner_1}
            alt="First slide"
            />
          <Carousel.Caption>
            <div className="">
            </div>
          </Carousel.Caption>
        </Carousel.Item>
    );
  }

export default Detail;
