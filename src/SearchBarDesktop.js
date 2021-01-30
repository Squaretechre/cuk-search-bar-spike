import React from "react";

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
            onChange={({ target: { value } }) => setLocation(value)}
          />
        </div>
        <div>
          <span>venueType</span>
          <input
            type="text"
            value={venueType}
            onChange={({ target: { value } }) => setVenueType(value)}
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
        <div>
          <span>attendees</span>
          <input
            type="text"
            value={attendees}
            onChange={({ target: { value } }) => setAttendees(value)}
          />
        </div>
        <div>
          <span>layout</span>
          <input
            type="text"
            value={layout}
            onChange={({ target: { value } }) => setLayout(value)}
          />
        </div>
        <div>
          <span>bedrooms</span>
          <input
            type="text"
            value={bedrooms}
            onChange={({ target: { value } }) => setBedrooms(value)}
          />
        </div>
        <button onClick={handleSearch}>search</button>
      </div>
    </div>
  );
};

export default SearchBarDesktop;
