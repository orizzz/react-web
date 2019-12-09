import React, { Component } from 'react'
import axios from 'axios';

import banner_1 from '../img/carosel_1.jpg'
import { Parallax } from 'react-parallax'
import Card from 'react-bootstrap/Card'
import NavLink from 'react-router-dom/NavLink';

import SearchBar from '../Component/SearchBar';
import ItemSearch from '../Component/itemSearch';

class Search extends Component {
    
    state = {
        SearchResult:[],
    }

    getURL = (searchBarData) => {
        this.props.history.push('/Search/'+searchBarData)
        window.location.reload();
    }

    
    componentDidMount(){
        console.log(this.props);
        const {searchQuery} = this.props.match.params
        // get Detail kost
        axios.post('http://localhost/webkosan_api/getSearch.php', {
            "nama_kost": searchQuery,
            "alamat_kost": searchQuery,
            "lokasi_kost": searchQuery
        })
        .then((response) => {
            this.setState({SearchResult: response.data})
            console.log(response);
        })
        .catch((error) => {
            this.setState({SearchResult: [{status:null}]})
            console.log(error);
        });
    }
    
    render() {
        
        const {searchQuery} = this.props.match.params
        console.log(this.props)
        return (
            <div>
                <Parallax
                bgImage={require('../img/home_banner.jpg')}
                bgImageAlt="Home Banner"
                strength={50}
                >
                    <div className="d-flex" style={{ height: '180px'}}>
                        <div className="container my-auto">
                            <SearchBar parentCallback = {this.getURL}/>
                        </div>
                    </div>
                </Parallax>
                
                <div className="container-fluid p-4">
                    <div className="d-flex justify-content-center">

                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-12">
                            
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="row">
                            
                            <ItemSearch searchData={searchQuery}/>

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

var item = [];
for (var i = 1; i <= 6; i++) {
    item.push(
    
  );
}

export default Search;
