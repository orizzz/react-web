import React from 'react';
import axios from 'axios';
import banner_1 from '../img/carosel_1.jpg'
import Card from 'react-bootstrap/Card'
import Link from 'react-router-dom/Link'

class ItemCard extends React.Component {
state = {
  items:[],
}

componentDidMount(){
  axios.get('http://localhost/webkosan_api/getItem.php')
  .then(res => {
    this.setState({items: res.data})
    console.log(res)
  });
}


  render() {
    return (
      <div className="row">

        { this.state.items.map(item =>
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



export default ItemCard;

