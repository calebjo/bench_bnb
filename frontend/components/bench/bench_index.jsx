import React from "react";
import BenchIndexItem from "./bench_index_item";

export default class BenchIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBenches();
    }

    render() {
        const benchList = this.props.benches.map((bench, idx) => {
            if (bench.id){
                return (
                    <BenchIndexItem
                        bench={bench}
                        key={idx}
                    />
                )
            }
        })
        return (
            <div className="benches">
                { benchList }
            </div>
        );
        
    }
}