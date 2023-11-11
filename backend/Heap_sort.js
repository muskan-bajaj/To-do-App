module.exports = class HeapSort {
  constructor(sorton = "Priority") {
    this.sorton = sorton;
  }
  #sort(arr) {
    var N = arr.length;
    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--) this.#heapify(arr, N, i);
    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
      // Move current root to end
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      // call max heapify on the reduced heap
      this.#heapify(arr, i, 0);
    }
  }
  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap
  #heapify(arr, N, i) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l][this.sorton] > arr[largest][this.sorton]) largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r][this.sorton] > arr[largest][this.sorton]) largest = r;

    // If largest is not root
    if (largest != i) {
      var swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;
      // Recursively heapify the affected sub-tree
      this.#heapify(arr, N, largest);
    }
  }

  setArray(arr) {
    this.arr = arr;
  }
  getArray() {
    return this.arr;
  }
  sortArray() {
    this.#sort(this.arr);
  }
}
