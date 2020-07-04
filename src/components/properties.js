import React from "react";

const properties = (props) => {
  return (
    <div id="properties">
      <div class="property-details">
        <img src={props.imgsrc} alt={props.alt} />

        <p class="price">{props.price}</p>
        <span class="beds">{props.numofbeds}</span>
        <span class="baths">{props.numofbaths}</span>
        <span class="sqft">{props.size}</span>
        <address>{props.address}</address>
      </div>
    </div>
  );
};

export default properties;
