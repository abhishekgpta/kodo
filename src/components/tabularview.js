import React from "react";

/**
 * Tabular view of the seed data
 */
function TabularView(props) {
  let { data2Map = [] } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data2Map.map((datum, index) => {
            return (
              <tr key={`${index}-table`}>
                <td>{datum.name}</td>
                <td>
                  <img
                    src={datum.image}
                    alt="item_image"
                    width="70px"
                    height="70px"
                  ></img>
                </td>
                <td>{datum.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TabularView;
