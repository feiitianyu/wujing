function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function selectionSort(arr) {
  if(!Array.isArray(arr) || arr.length < 2) {
    return
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    swap(arr, i, minIndex)
  }
}

function bubbleSort(arr) {
  if(!Array.isArray(arr) || arr.length < 2) {
    return
  }
  for (let e = arr.length - 1; e > 0; e--) {
    for (let j = 0; j < e; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
      }
    }
  }
}

function insertionSort(arr) {
  if(!Array.isArray(arr) || arr.length < 2) {
    return
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j+1]; j++) {
      swap(arr, j, j+1)
    }
  }
}
