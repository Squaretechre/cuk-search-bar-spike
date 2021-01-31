import React from "react";
import { withValueFrom } from "./dom";

const SearchBarMobile = ({
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
      <h1>📱 Mobile search</h1>
      <div>
        <span>location</span>
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(withValueFrom(event))}
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
        <span>budget</span>
        <input
          type="text"
          value={budget}
          onChange={(event) => setBudget(withValueFrom(event))}
        />
      </div>
      <button onClick={handleSearch}>search</button>
    </div>
  );
};

export default SearchBarMobile;
