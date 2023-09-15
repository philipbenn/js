function myFilter(array, callback) {
    const filteredArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
  
    return filteredArray;
  }
  

  function myMap(array, callback) {
    const mappedArray = [];
  
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i], i, array));
    }
  
    return mappedArray;
  }