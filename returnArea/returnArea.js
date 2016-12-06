//Calculate rectangle area
function getArea (length, width) {
  var area = length * width;
  return area;
}

console.log(getArea (25, 10));
//Calculate rectangle area

//Function w/ 3 params
function getArea (length, width, unit) {
  var area = length * width;
  return area + " " + unit;
}

console.log(getArea (5,2, 'sq ft'));