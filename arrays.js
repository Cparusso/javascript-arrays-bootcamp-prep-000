var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (anArr, anElem) {
  var newArr = [anElem, ...anArr];

  return newArr;
}

function destructivelyAddElementToBeginningOfArray (anArr, anElem) {
  anArr.unshift(anElem);

  return anArr;
}
