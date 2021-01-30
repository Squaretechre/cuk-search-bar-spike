import React from "react";
import queryString from "query-string";
import SearchBar from "./SearchBar";

/*
  Replace browser url with:
  https://0ux25.csb.app/?location=Manchester&venueType=Conference Centre&budget=1000&attendees=20&layout=Cabaret&bedrooms=10
*/

const searchParameters = queryString.parse(window.location.search);

const handleSearch = (payload) => {
  console.log(`Calling the search API with ${JSON.stringify(payload)}`);
};

console.log("initial search on page load");
handleSearch(searchParameters);

export default () => (
  <SearchBar searchParameters={searchParameters} handleSearch={handleSearch} />
);
