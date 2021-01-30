import React from "react";

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
          onChange={({ target: { value } }) => setLocation(value)}
        />
      </div>
      <div>
        <span>attendees</span>
        <input
          type="text"
          value={attendees}
          onChange={({ target: { value } }) => setAttendees(value)}
        />
      </div>
      <div>
        <span>budget</span>
        <input
          type="text"
          value={budget}
          onChange={({ target: { value } }) => setBudget(value)}
        />
      </div>
      <button onClick={handleSearch}>search</button>
    </div>
  );
};

export default SearchBarMobile;
