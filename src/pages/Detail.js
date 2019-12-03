import React, { Component } from 'react';
import axios from 'axios';
import {whatsapp} from 'react-icons-kit/fa/whatsapp'
import { Icon } from 'react-icons-kit'
import CurrencyFormat from 'react-currency-format'

import banner_1 from '../img/carosel_1.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Detail extends Component {

    state = {
        Detail:[],
        Kamar:[],
    }
      
    componentDidMount(){
        const { items_id } = this.props.location.state //get state dari item
        // get Detail kost
        axios.post('http://localhost/webkosan_api/getDetail.php', {
            "id_kost": items_id,
          })
          .then((response) => {
            this.setState({Detail: response.data})
            console.log(response);
          })
          .catch((error) => {
            this.setState({Detail: []})
            console.log(error);
          });
        //   get Kategori kamar
          axios.post('http://localhost/webkosan_api/getKamar.php', {
            "id_kost": items_id,
          })
          .then((response) => {
            this.setState({Kamar: response.data})
            console.log(response);
          })
          .catch((error) => {
            this.setState({Kamar:[]})
            console.log(error);
          });
    
    }
    render() {

        return (
        <div>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <p>
                            <fasilitas />
                        </p>
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
                                        {this.state.Detail.map(detail => 
                                        <div>
                                            <div className="h5">{detail.nama_kost}</div>
                                            <div className="my-2 h6 font-weight-light">{detail.alamat_kost}</div>
                                            <div className="my-2 h6 font-weight-light">{detail.deskripsi_kost}</div>
                                            <div className="my-2 h6">Contact : {detail.kontak_kost}</div>
                                        </div>
                                        )}
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <div className="h3 p-3">
                                Jenis Ruangan
                            </div>
                            {/* Kategori Kamar */}
                            {this.state.Kamar.map(kamar => 
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
                                        <div className="h5 ">{kamar.nama_kamar}</div>
                                        <div className="h5 ">Fasilitas</div>
                                        <ul>
                                            {kamar.fasilitas_kamar.split(',').map(fas => 
                                                <li>{fas}</li>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 p-4">
                                        <div className="h3 ">Rp.  
                                        <CurrencyFormat value={kamar.harga_kamar} displayType={'text'} thousandSeparator={true} />
                                         /Bulan</div>
                                    </div>
                                    <div className="w-100 pr-3 d-flex justify-content-end">
                                        <Button className="" variant="light">Pesan Sekarang</Button>
                                    </div>
                                </div>
                            </Card>
                            )}
                            {/* kategori kamar end */}
                            <div className="d-flex justify-content-center my-5">
                                <Button className="mx-2" variant="success">
                                <Icon className="mr-2" size={18} icon={whatsapp} />
                                    hubungi kami</Button>
                            </div>
                        </div>
                    </div>   
                    </div>
                    <div className="col-lg-2 col-12">
                        <div className="p-2 m-2 " >
                        <a href="https://pbn.roomme.id/"><img className="img-fluid w-100 h-100"
                         src="https://kostroomme.com/wp-content/uploads/2019/11/Aplikasi-Roomme.jpg" 
                         title="pbn.roomme.id" alt="pbn.roomme.id"/></a>

                        <a href="https://pbn.roomme.id/"><img 
                        src="https://via.placeholder.com/300" className="img-fluid w-100 h-100"/></a>
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
