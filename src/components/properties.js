import React from "react";

const properties = (props) => {
  return (
    <div>
      <img src={props.imgsrc} alt={props.alt} />
      <div class="property-details">
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
