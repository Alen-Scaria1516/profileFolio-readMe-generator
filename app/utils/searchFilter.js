import { techData } from "../data/tech";

export function searchFilter(searchStr) {
  // Creating an empty newData
  let newData = {
    lang: []
  };
  //   Filtering object using old school, for loop
  Object.keys(techData).map(function (objectKey, index) {
    for (let i = 0; i < techData[objectKey].length; i++) {
      let label = techData[objectKey][i].label;
      //   converting search string to lowercase to avoid case errors
      let searchString = searchStr.toUpperCase();
      //   checking condition
      if (label.includes(searchString)) {
        newData[objectKey].push(techData[objectKey][i]);
      }
    }
  });
  //   returns new data array (filtered)
  return newData;
}
