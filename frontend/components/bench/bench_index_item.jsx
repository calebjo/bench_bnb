import React from "react";

const BenchIndexItem = props => {
    return (
        <div>
            <h3>{props.bench.description}</h3>
            <h3>{props.bench.lat}</h3>
            <h3>{props.bench.lng}</h3>
        </div>
    )
}

export default BenchIndexItem;