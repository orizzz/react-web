import React from 'react';
import axios from 'axios';
import banner_1 from '../img/carosel_1.jpg'
import Card from 'react-bootstrap/Card'
import Link from 'react-router-dom/Link'

class ItemSearch extends React.Component {

state = {
    SearchResult:[],
}

componentDidMount(){
    console.log(this.props);
    const { searchData } = this.props
    // get Detail kost
    axios.post('http://localhost/webkosan_api/getSearch.php', {
        "nama_kost": searchData,
        "alamat_kost": searchData,
        "lokasi_kost": searchData
    })
    .then((response) => {
        this.setState({SearchResult: response.data})
        console.log(response);
    })
    .catch((error) => {
        this.setState({SearchResult: [{status:false}]})
        console.log(error);
    });
}


  render() {
    return (
      <div className="row">

        { this.state.SearchResult.map(item =>

          <div className="col-lg-4 col-6 my-2">
          <Link  to={{
            pathname:  '/Detail/' + item.id_kost + '/' + item.nama_kost,
            state: {items_id: item.id_kost} ,
          }}>
              <Card className="border-0 shadow-sm h-100" key={item.index}>
                <Card.Img variant="top" src={banner_1} alt="{item.nama_kost}" /> 
                <Card.Body className="text-dark">
                    <div className="h6">{item.nama_kost}</div>
                    <div className="h6 font-weight-light">{item.alamat_kost}</div>
                </Card.Body>
              </Card>
            </Link >
          </div>
          
          )}

      </div>
    );
  }
}



export default ItemSearch;

