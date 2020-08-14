function findSubstringAplhabetically(s) {
    const arr = [...s].reduce((acc, _, i) =>
        acc.concat(Array.from({ length: s.length }, (_, innerIdx) =>
            s.substring(i, innerIdx + 1)
        )), [])
    const res = new Set(arr);
    const resArr = Array.from(res);
    resArr.sort();
    return resArr[resArr.length - 1];
}

console.log(findSubstringAplhabetically("ba"));

function getAllSubstrings(str) {
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result.sort();
  }
  
  var theString = 'baca';
  console.log(getAllSubstrings(theString));