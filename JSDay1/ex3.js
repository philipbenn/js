// Firstly i initialize an empty array where i can keep all my filtered data
function myFilter(array, callback) {
    const filteredArray = [];
  
    // Here i iterate through the length of the given array in the parameter and add the filtered data to my new array
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
  
    // Lastly i return the filtered array with the new data
    return filteredArray;
  }
  
  function myMap(array, callback) {
    const mappedArray = [];
  
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i], i, array));
    }
  
    return mappedArray;
  }