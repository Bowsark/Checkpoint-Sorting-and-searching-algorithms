function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];  // The element to be inserted
      let j = i - 1;
  
      // Shift elements of arr[0...i-1] that are greater than key to one position ahead
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];  // Shift element to the right
        j--;
      }
      arr[j + 1] = key;  // Insert the key in the correct position
    }
    return arr;
  }
  
  // Example usage:
  const array = [12, 11, 13, 5, 6];
  console.log(insertionSort(array));  // Output: [5, 6, 11, 12, 13]
  