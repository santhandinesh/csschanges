import "@reach/dialog/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import LiveChat from 'react-livechat';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BackgroundImg from '../images/bg.svg';
import { products, responsive } from './constants';
import ProductDetail from './ProductDetail';
import './style.css';




class Home extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      productId: 0,
      productUrl: ''
    }
    localStorage.setItem("closePopup", false)
  }

  addToCart = count => {
    this.setState({
      cartCount: (this.state.cartCount ? this.state.cartCount : 0) + 1
    })
    console.log(this.state.cartCount);
  }

  close = () => {
    this.setState({
      showDialog: false
    });
  }

  open = (id) => {
    console.log("product id : " + id)
    this.setState({
      showDialog: true,
      productId: id,
      productUrl: 'http://localhost:3000/pdp?productId=' + id,
      handleClose: this.close,
      handleAdded: this.addToCart
    });
  }

  render() {

    return (

      <div className="App">


        <Navbar bg="light" expand="lg" className="bg-white">
          <Navbar.Brand href="#home">
            <img src={require('../images/retailIcon.png')} alt='logo' style={{ width: '150px' }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-4">
              <Nav.Link href="#home" className="text-secondary mr-4">Home</Nav.Link>
              <Nav.Link href="#link" className="text-secondaryo mr-4">Contacts</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="text-secondary">Sign In</Nav.Link>
              <button class="btn btn-outline-primary ml-4" style={{ borderRadius: '20px' }}>
                <i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
                {this.state.cartCount || 0}
              </button>

            </Nav>
          </Navbar.Collapse>
        </Navbar>


        {/* <div className="row header-content  align-items-center" style={{ marginTop: '0em' }}>

          <div className="col-lg-4">
            <img src={require('../images/retailIcon.png')} alt='logo' style={{ width: '150px' }}></img>
          </div>
          <div className="col-lg-2">
            <span>Home</span>
          </div>
          <div className="col-lg-2">
            <span>Contacts</span>
          </div>

          <div className="col-lg-2">
            <span>Sign-In</span>
          </div>

          <div className="col-lg-2">
            <img src={require('../images/cart.svg')} alt="cart" />
            <span class="badge badge-light">{this.state.cartCount}</span>
          </div>
        </div> */}

        < div className="container-fluid" style={{ backgroundImage: "url(" + BackgroundImg + ")", backgroundRepeat: "no-repeat" }
        }>
          <div className="row">
            <div className="col-lg-12 video-box">
              <iframe height="500" width="80%" frameBorder="0" title="videoStream" allow="fullscreen" style={{ borderRadius: 10 + "px" }}
                src="https://dist.bambuser.net/player/?resourceUri=https%3A%2F%2Fcdn.bambuser.net%2Fgroups%2F94697%2Fbroadcasts%3Fby_authors%3D%26title_contains%3D%26has_any_tags%3D%26has_all_tags%3D%26da_id%3D26b338c6-a4e3-8886-cefa-c400cf49144a%26da_timestamp%3D1593702116%26da_signature_method%3DHMAC-SHA256%26da_ttl%3D0%26da_static%3D1%26da_signature%3D20e03a4ae412b62723ec42f27f7b9b857a6d45f4ca556af57a7e6b9adfc9c60d"
                webkitallowfullscreen="true"></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 product-carousel mb-4">
              <Carousel responsive={responsive} autoPlay={this.props.deviceType !== "mobile" ? true : false}
                infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}>
                {products.map(el => (

                  <button onClick={() => this.open(el.id)} className="Carousel-button">
                    <div className="Carousel-box" style={{ padding: '15px' }}>
                      <table style={{ width: '100px' }} >
                        <tbody>
                          <tr>
                            <td><img src={require('../images/' + el.image)} className="Carousel-box-Img" alt="" /></td>
                            <td style={{ textAlign: "left", paddingLeft: '10% ' }}>
                              <h6 className="text-nowrap mr-4" style={{ width: '160px', textOverflow: 'ellipsis', overflow: 'hidden' }}>{el.shortDescription}</h6>
                              <h5 className="text-success" >${el.sellingprice}
                                <h6 className="text-secondary d-inline ml-2" ><del>${el.listprice}</del></h6>
                              </h5>
                              <h6 className="category-name text-nowrap" style={{ textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '0.7rem' }}>{el.Category}</h6>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </button>

                ))}

              </Carousel>

              {this.state.showDialog && <ProductDetail props={this.state}></ProductDetail>}

              <LiveChat license={12050871} />

            </div>
          </div>
        </div >
        <div className="Footer">
          <p>&copy; thefamousretailer</p>
        </div>
      </div >

    );
  }
}

export default Home;
