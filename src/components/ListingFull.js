import React from "react";

const ListingFull = (props) => {
  return (
    <div className="listing-full-container">
      <h1>{props.property.data?._id}</h1>
      <h1>{props.property.data?.title}</h1>
      <h1>{props.property.data?.description}</h1>
      <h1>{props.property.data?.location}</h1>
      <h1>{props.property.data?.price}</h1>
      <h1>{props.property.data?.rules}</h1>
    </div>
  );
};

export default ListingFull;
