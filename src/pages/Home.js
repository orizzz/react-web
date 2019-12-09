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

import SearchBar from '../Component/SearchBar';

import '../css/App.css'

import ItemCard from '../Component/ItemCard'
import { Parallax } from 'react-parallax'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

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

  
  class Main extends Component{

  getURL = (searchBarData) => {
    this.props.history.push('/Search/'+searchBarData)
  }
  
  render(){
    console.log(this.props)
    return(
        <div>
        <Parallax
            bgImage={require('../img/home_banner.jpg')}
            bgImageAlt="Home Banner"
            contentClassName="container py-5"
            strength={500}
            >  
          <div className="row">
            <div className="col-lg-4">
              <div className="card p-3 border-0 shadow">
                <div className="h4 mx-auto mt-2">Cari Kost Dimana?</div>
                <div className="my-3">
                  <SearchBar parentCallback = {this.getURL}/>
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
        <div className="container py-3 px-5">
          <div className="d-flex pt-5 pb-3">
            <div className="h3 font-weight-bold mx-auto my-auto">Kost Di Jakarta Barat</div>
          </div>
          
            <ItemCard />
            <div className="d-flex pt-5 pb-3">
              <div className="h3 font-weight-bold mx-auto my-auto">Kost Di Jakarta Utara</div>
            </div>
            <ItemCard />
        </div>
        <div className="container-fluid bg-white border-0 shadow">
          <Card className="p-3 border-0">
            <div className="h3 font-weight-bold mx-auto my-auto">Fasilitas Kami</div>
          </Card>
          <div className="container">

            <div className="row bg-white px-5 pb-5">
              <div className="col-lg-2 col-md-4 col-6">
                <div className="p-1">
                  <img src={wifi} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <div className="p-1">
                  <img src={ac} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <div className="p-1">
                  <img src={service} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <div className="p-1">
                  <img src={parking} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <div className="p-1">
                  <img src={shower} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <div className="p-1">
                  <img src={furniture} className="img-fluid" alt="" />
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

              <div>
                <div className="text-light">
                  <div className="h1 text-center mt-4">Cari Kostmu di sini Sekarang</div>
                  <div className="row text-center p-5 mb-3">
                    <div className="col-4">
                      <img src={like} alt="" className="img-fluid"/>
                      <div className="h4 py-3">Kenyamanan Terjamin</div>
                    </div>
                    <div className="col-4">
                      <img src={quality} alt="" className="img-fluid"/>
                      <div className="h4 py-3">Kualitas Terbaik</div>
                    </div>
                    <div className="col-4">
                      <img src={pay} alt="" className="img-fluid"/>
                      <div className="h4 py-3">Pembayaran Mudah</div>
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