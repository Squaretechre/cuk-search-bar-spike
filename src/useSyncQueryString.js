import { useEffect } from "react";

export const useSyncQueryString = (parameters) => {
  useEffect(() => {
    const { search, protocol, host, pathname } = window.location;

    var searchParams = new URLSearchParams(search);

    Object.keys(parameters).forEach((key) => {
      searchParams.set(key, parameters[key]);
    });

    var newurl = `${protocol}//${host}${pathname}?${searchParams}`;

    window.history.pushState({ path: newurl }, "", newurl);
  });
};
