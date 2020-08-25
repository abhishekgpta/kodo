import React, { useState } from "react";
import data from "../mock_data.json";

import GridView from "./gridView";
import TabularView from "./tabularview";

function Main() {
  // Mutable control state.
  const [query, setQuery] = useState(localStorage.getItem("kodo_search") || "");
  const [sortValue, setSortBy] = useState(
    localStorage.getItem("kodo_sort") || "default"
  );

  let data2Map = [];
  //TODO add SORT_TYPE:Ascending/Descending
  //Sort by Title, date
  switch (sortValue) {
    case "title":
      data2Map = data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      break;
    case "date":
      data2Map = data.sort(function (a, b) {
        return new Date(b.dateLastEdited) - new Date(a.dateLastEdited);
      });
      break;
    default:
      data2Map = data;
  }
  const pattern = /".*?"/g;
  const searchKeyword = query.match(pattern) || [];
  //check for specific keywords without changing letter case.
  if (searchKeyword.length > 0) {
    data2Map = data2Map.filter((datum) => {
      const { name = "", description = "" } = datum;
      return searchKeyword.some(
        (item) =>
          name.includes(item.replace(/['"]+/g, "")) ||
          description.includes(item.replace(/['"]+/g, ""))
      );
    });
  } else {
    //without quotes.
    data2Map = data2Map.filter((datum) => {
      const { name = "", description = "" } = datum;
      return (
        name
          .toLowerCase()
          .includes(query.toLowerCase().replace(/['"]+/g, "")) ||
        description
          .toLowerCase()
          .includes(query.toLowerCase().replace(/['"]+/g, ""))
      );
    });
  }
  return (
    <div className="container">
      <div className="content__search">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            localStorage.setItem("kodo_search", e.target.value);
            setQuery(e.target.value);
          }}
          placeholder="Search by Title and Description"
        />
        <span>
          SORT BY:
          <select
            value={sortValue}
            onChange={(e) => {
              localStorage.setItem("kodo_sort", e.target.value);
              setSortBy(e.target.value);
            }}
          >
            <option value="default">DEFAULT</option>
            <option value="title">TITLE</option>
            <option value="date">DATE</option>
          </select>
        </span>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <GridView data2Map={data2Map} />
      </div>
      <div>
        <TabularView data2Map={data2Map} />
      </div>
    </div>
  );
}
export default Main;
