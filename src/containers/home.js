import React from 'react';
import './style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { products, responsive } from './constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveChat from 'react-livechat'
import BackgroundImg from '../images/bg.svg';

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


  open = (id) => {
    console.log("product id : " + id)
    this.setState({
      showDialog: true,
      productId: id,
      productUrl: 'http://34.69.207.176:3000/pdp?productId=' + id
    });
  }

  close = () => {
    this.setState({
      showDialog: false
    });
  }


  render() {

    return (

      <div className="App">


        <div className="row header-content" style={{ marginTop: '0em' }}>
          <div className="col-lg-4">
            <img src={require('../images/retailIcon.png')} alt='logo' className="logo"></img>
          </div>
          <div className="col-lg-2" style={{ paddingTop: 20 + "px" }}>
            <span>Home</span>
          </div>
          <div className="col-lg-2" style={{ paddingTop: 20 + "px" }}>
            <span>Contacts</span>
          </div>

          <div className="col-lg-2" style={{ paddingTop: 20 + "px" }}>
            <span>Sign-In</span>
          </div>

          <div className="col-lg-2" style={{ paddingTop: 10 + "px" }}>
            <img src={require('../images/cart.svg')} alt="cart" />
            <span class="badge badge-light">{this.state.cartCount}</span>
          </div>
        </div>


        <div className="container-fluid" style={{ backgroundImage: "url(" + BackgroundImg + ")", backgroundRepeat: "" }}>
          <div className="row">
            <div className="col-lg-12 video-box">
              <iframe height="500" width="80%" frameBorder="0" title="videoStream" allow="fullscreen" style={{ borderRadius: 10 + "px" }}
                src="https://dist.bambuser.net/player/?resourceUri=https%3A%2F%2Fcdn.bambuser.net%2Fgroups%2F94697%2Fbroadcasts%3Fby_authors%3D%26title_contains%3D%26has_any_tags%3D%26has_all_tags%3D%26da_id%3D26b338c6-a4e3-8886-cefa-c400cf49144a%26da_timestamp%3D1593702116%26da_signature_method%3DHMAC-SHA256%26da_ttl%3D0%26da_static%3D1%26da_signature%3D20e03a4ae412b62723ec42f27f7b9b857a6d45f4ca556af57a7e6b9adfc9c60d"
                webkitallowfullscreen="true"></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 product-carousel">
              <Carousel responsive={responsive} autoPlay={this.props.deviceType !== "mobile" ? true : false}
                infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}>
                {products.map(el => (

                  <button onClick={() => this.open(el.id)} className="Carousel-button">
                    <div className="Carousel-box" style={{padding: 'center'}}>
                      <table>
                        <tbody style={{ margin: "0 auto" }}>
                          <tr>
                            <td><img src={require('../images/' + el.image)} className="Carousel-box-Img" alt="" /></td>
                            <td style={{ textAlign: "left", paddingLeft:'10% ' }}>
                              <span className="Carousel-box-decsription"> {el.shortDescription}</span><br></br>
                              <span className="category-name">{el.Category}</span><br></br>
                              <span style={{ color: "red" }} className="strikeprice">${el.listprice}</span>
                              <span style={{paddingLeft:'10px'}}>${el.sellingprice}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </button>

                ))}

              </Carousel>

              <Dialog aria-label="" isOpen={this.state.showDialog} onDismiss={this.close} style={{ marginTop: '50vh', width: '80em', height: '50em' }}>
                <button className="close-btn" onClick={this.close}>close</button>
                  <iframe className="responsive-iframe" frameBorder="0" title="videoStream" style={{ borderRadius: 10 + "px" }}
                    src={this.state.productUrl}
                  ></iframe>
              </Dialog>

              <LiveChat license={12050871} />

            </div>
          </div>
        </div>
        <div className="Footer">
          <p>&copy; thefamousretailer</p>
        </div>
      </div>

    );
  }
}

export default Home;
