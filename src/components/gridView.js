import React, { useState } from "react";

/**
 * Grid view of the seed data
 */
function GridView(props) {
  let [pageNumber, setPageNumber] = useState(0);
  let { data2Map = [] } = props;
  const pageSize = Math.min(10, data2Map.length);
  const data2Show = data2Map.slice(
    pageSize * pageNumber,
    pageSize * (pageNumber + 1)
  );
  const nop = data2Map.length / pageSize;
  return (
    <div>
      <div className="content__container">
        {/*Add Lazy loading for large amount of data */}
        {data2Show.length > 0 ? (
          data2Show.map((datum, index) => {
            const { name, image, description } = datum;
            return (
              <div key={`${index}-content`} className="content__container_item">
                <h3>{name}</h3>
                <img
                  src={image}
                  alt="itemImage"
                  width="150px"
                  height="150px"
                ></img>
                <p>{description}</p>
              </div>
            );
          })
        ) : (
          <h5>NO DATA</h5>
        )}
      </div>
      <div className="pagination">
        {pagination(nop, pageNumber, setPageNumber)}
      </div>
    </div>
  );
}
export default GridView;

/**
 * Pagination component
 */
function pagination(numberOfPage, pageNumber, setPageNumber) {
  const paginationItems = [
    <button
      key={`leftMost_pageNumber`}
      onClick={() => {
        setPageNumber(0);
      }}
    >
      &laquo;
    </button>
  ];
  for (let i = 0; i < numberOfPage; i++) {
    paginationItems.push(
      <button
        key={`${i}_pageNumber`}
        className={pageNumber === i ? "active" : ""}
        onClick={() => {
          setPageNumber(i);
        }}
      >
        {i + 1}
      </button>
    );
  }
  paginationItems.push(
    <button
      key={`rightMost_pageNumber`}
      onClick={() => {
        setPageNumber(numberOfPage - 1);
      }}
    >
      &raquo;
    </button>
  );
  return paginationItems;
}
