

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const click = function() {
  console.log("click")
  window.open('https://www.google.de/maps/place/B%C3%BCrgerhaus/@49.300888,7.3685871,268m/data=!3m2!1e3!5s0x4795da7178532a8f:0x155d8045a80c561!4m13!1m7!3m6!1s0x4795da7107cd89ad:0x707a923f6656f7f3!2sKirrberg,+66424+Homburg!3b1!8m2!3d49.3009994!4d7.3693818!3m4!1s0x4795da717860eea1:0x228cbbe1a21c0d36!8m2!3d49.30077!4d7.3693119', "_blank") 
}

class SimpleMap extends Component {
  static defaultProps = {

    center: {
      lat: 49.300919, 
      lng: 7.369322
    },
    zoom: 18
  };

 
  
  render() {

    const renderMarkers = (map, maps) => {
      let marker = new maps.Marker({
      position: { lat: 49.300919, lng: 7.369322 },
      map,
      title: 'Hello World!'
      });
      return marker;
     };
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCrXkXBTtoR-OBZO5TMjYt26ls4fr6VumY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >
          {/* <AnyReactComponent
            lat={49.300919}
            lng={7.369322}
            text="Vereinsheim"
            /> */}
           <Marker
                key={1}
                text="Vereinsheim"
                lng={7.369322}
                lat={49.300919}
                onClick={click}
              />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;