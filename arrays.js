var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (anArr, anElem) {
  var newArr = [anElem, ...anArr];

  return newArr;
}

function destructivelyAddElementToBeginningOfArray (anArr, anElem) {
  anArr.unshift(anElem);

  return anArr;
}

function addElementToEndOfArray (anArr, anElem) {
  var newArr = [...anArr, anElem];

  return newArr;
}

function destructivelyAddElementToEndOfArray (anArr, anElem) {
  anArr.push(anElem);

  return anArr;
}
