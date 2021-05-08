import React from "react";

import "./home.css";

class Bgslide extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB661598783_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/Jan/SupersaverSSH/Super-saver-1500x600-EOSS-1._CB411551980_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Vday2021/GW/REv/Valentines-day-GW-Hero-PC-1x._CB660992894_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroJan21/Desktop_Dot_Bluetooth_1X._CB411971955_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2019/4852331/Gateway-TallHero-1500x600._CB413504635_.jpg",
      ],
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 4000);
  }

  render() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            src={this.state.images[this.state.currentImage]}
            alt="cleaning images"
            className="home__image"
          />
        </div>
      </div>
    );
  }
}

export default Bgslide;
