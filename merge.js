function merge(arr1, arr2) {
  const outArr = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      outArr.push(arr1[pointer1]);
      pointer1++;
    } else {
      outArr.push(arr2[pointer2]);
      pointer2++;
    }
  }
  while (pointer1 < arr1.length) {
    outArr.push(arr1[pointer1]);
    pointer1++;
  }
  while (pointer2 < arr2.length) {
    outArr.push(arr2[pointer2]);
    pointer2++;
  }
  return outArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  // else
  let midpoint = Math.floor(arr.length / 2);
  let leftArr = mergeSort(arr.slice(0, midpoint));
  let rightArr = mergeSort(arr.slice(midpoint));
  return merge(leftArr, rightArr);

}

module.exports = { merge, mergeSort};