import React, { Component } from 'react';

const google = window.google;

const mapDivStyle = {
    height: 200,
    width: 250
};

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.mapDivElement, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return (
            <div ref={element => this.mapDivElement = element} style={mapDivStyle}>
            </div>
        );
    }
}

export default GoogleMap;