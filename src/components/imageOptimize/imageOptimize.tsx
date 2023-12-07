import React from "react";
function ImageOptimize(props: any) {
    return (
        <img
            alt={props.alt || "Rooster Ruler"}
            src={`${props.src}`}
            {...props}
        />
    )
}
export default ImageOptimize;