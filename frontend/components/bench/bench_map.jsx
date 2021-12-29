import React from "react";
import ReactDOM from "react-dom";

export default class BenchMap extends React.Component {
    constructor(props){
        super(props);
        this.addBench = this.addBench.bind(this);
    }

    componentDidMount() {
        const mapOptions = {
          center: { lat: 37.7758, lng: -122.435 },
          zoom: 13
        };

        const map = ReactDOM.findDOMNode(this.refs.map)
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(map, mapOptions);

        // this.listenForMove();
        if(this.props.benches) {
            this.props.benches.forEach(this.addBench);
        }
    }

    addBench(bench) {
        const pos = new google.maps.LatLng(bench.lat, bench.lng);

        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        })

        marker.addListener('click', () => {
            alert(`Clicked on: ${bench.description}`)
        })
    }

    render(){
        return(
            <div id='map-container' ref='map'>
            </div>
        )
    }
}