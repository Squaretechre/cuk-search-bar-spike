import React, { useState } from "react";
import useMedia from "use-media";
import SearchBarMobile from "./SearchBarMobile";
import SearchBarDesktop from "./SearchBarDesktop";
import { useSyncQueryString } from "./useSyncQueryString";

const SearchBar = ({
  searchParameters: {
    location,
    venueType,
    budget,
    attendees,
    layout,
    bedrooms
  },
  handleSearch
}) => {
  const isWide = useMedia({ minWidth: "1000px" });
  const [_location, setLocation] = useState(location);
  const [_venueType, setVenueType] = useState(venueType);
  const [_budget, setBudget] = useState(budget);
  const [_attendees, setAttendees] = useState(attendees);
  const [_layout, setLayout] = useState(layout);
  const [_bedrooms, setBedrooms] = useState(bedrooms);

  const parameters = () => {
    return {
      location: _location,
      venueType: _venueType,
      budget: _budget,
      attendees: _attendees,
      layout: _layout,
      bedrooms: _bedrooms
    };
  };

  useSyncQueryString(parameters());

  const _handleSearch = () => {
    handleSearch(parameters());
  };

  const props = {
    location: _location,
    venueType: _venueType,
    budget: _budget,
    attendees: _attendees,
    layout: _layout,
    bedrooms: _bedrooms,
    setLocation: setLocation,
    setVenueType: setVenueType,
    setBudget: setBudget,
    setAttendees: setAttendees,
    setLayout: setLayout,
    setBedrooms: setBedrooms,
    handleSearch: _handleSearch
  };

  return (
    <>
      <div>
        {isWide ? (
          <SearchBarDesktop {...props} />
        ) : (
          <SearchBarMobile {...props} />
        )}
      </div>
    </>
  );
};

export default SearchBar;
