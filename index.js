const sumItems = function(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach(element => {
    if (Array.isArray(element)) {
      sum = sum + sumItems(element);
    } else {
      sum = sum + element;
    }
       
  });

  return sum;
};

module.exports = sumItems;