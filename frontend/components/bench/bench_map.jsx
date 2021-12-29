import React from "react";
import ReactDOM from "react-dom";

import MarkerManager from "../../util/marker_manager";

export default class BenchMap extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
          center: { lat: 37.7758, lng: -122.435 },
          zoom: 13
        };

        const map = ReactDOM.findDOMNode(this.refs.map)
        this.map = new google.maps.Map(map, mapOptions);

        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers();
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers();
    }

    render(){
        return(
            <div id='map-container' ref='map'>
            </div>
        )
    }
}