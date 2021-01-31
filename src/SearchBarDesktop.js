import React from "react";
import { withValueFrom } from "./dom";

const SearchBarDesktop = ({
  location,
  venueType,
  budget,
  attendees,
  layout,
  bedrooms,
  setLocation,
  setVenueType,
  setBudget,
  setAttendees,
  setLayout,
  setBedrooms,
  handleSearch
}) => {
  return (
    <div>
      <h1>🖥️ Desktop search</h1>
      <div>
        <div>
          <span>location</span>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(withValueFrom(event))}
          />
        </div>
        <div>
          <span>venueType</span>
          <input
            type="text"
            value={venueType}
            onChange={(event) => setVenueType(withValueFrom(event))}
          />
        </div>
        <div>
          <span>budget</span>
          <input
            type="text"
            value={budget}
            onChange={(event) => setBudget(withValueFrom(event))}
          />
        </div>
        <div>
          <span>attendees</span>
          <input
            type="text"
            value={attendees}
            onChange={(event) => setAttendees(withValueFrom(event))}
          />
        </div>
        <div>
          <span>layout</span>
          <input
            type="text"
            value={layout}
            onChange={(event) => setLayout(withValueFrom(event))}
          />
        </div>
        <div>
          <span>bedrooms</span>
          <input
            type="text"
            value={bedrooms}
            onChange={(event) => setBedrooms(withValueFrom(event))}
          />
        </div>
        <button onClick={handleSearch}>search</button>
      </div>
    </div>
  );
};

export default SearchBarDesktop;
