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
    for (let j = i - 1; j >= 0 && arr[j] > arr[j+1]; j--) {
      swap(arr, j, j+1)
    }
  }
}

function mergeSort(arr) {
  if(!Array.isArray(arr) || arr.length < 2) {
    return
  }
}

function process(arr, l, r) {
  if(l === r) {
    return
  }
  const minIndex = l + ((r - l) >> 1)
  process(arr, l, minIndex)
  process(arr, minIndex+1, r)
  merge(arr, l, minIndex, r)
}

function merge(arr, l, minIndex, r) {
  let help = new Array(r-l+1)
  let i = 0
  let p1 = l
  let p2 = minIndex+1
  while(p1 <= minIndex && p2 <= r) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
  }
  while(p1 <= minIndex) {
    help[i++] = arr[p1++]
  }
  while(p2 <= r) {
    help[i++] = arr[p2++]
  }
  for (let i = 0; i < help.length; i++) {
    arr[l+i] = help[i]
  }
}
