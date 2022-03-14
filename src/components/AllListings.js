import { Link } from "react-router-dom";
import ListingPreview from "./ListingPreview";

const ListingContainer = (props) => {
  return (
    <div className="all-listings-container">
      {props.properties.data?.map((listing) => (
        <Link
          to={`/listings/property/${listing._id}`}
          style={{ textDecoration: "none" }}
        >
          <ListingPreview
            title={listing.title}
            pricePerNight={listing.pricePerNight}
            amenities={listing.amenities}
            type={listing.type}
            description={listing.description}
            location={listing.location}
            photoURL={listing.photoURL}
          />
        </Link>
      ))}
    </div>
  );
};

export default ListingContainer;
