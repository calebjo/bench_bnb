
export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
        
        this.updateMarkers = this.updateMarkers.bind(this)
        this.createMarkerFromBench = this.createMarkerFromBench.bind(this)
    }

    updateMarkers(benches) {
        console.log("Updating the bench markers!") // DEBUG

        benches.forEach( bench => {
            if (!(this.markers.hasOwnProperty(bench.id))){
                this.createMarkerFromBench(bench)
            }
        })
    }

    createMarkerFromBench(bench) {
        const map = this.map
        const benchPos = {lat: bench.lat, lng: bench.lng}
        const benchDesc = bench.description

        const newMarker = new google.maps.Marker({
            position: benchPos,
            map,
            title: benchDesc
        })

        this.markers[bench.id] = newMarker
    }
}