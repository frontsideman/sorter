class Sorter {
  constructor() {
    // your implementation
    this.state = [];
    this.sortFunc;
  }

  add(element) {
    // your implementation
    this.state.push(element); 
    return this.state;
  }

  at(index) {
    // your implementation
    return this.state[index];
  }

  get length() {
    // your implementation
    return this.state.length;
  }

  toArray() {
    // your implementation
    if (Array.isArray(this.state)) {
      return this.state;
    }
    // add method to change obj to array
  }

  sort(indices) {
    // your implementation
    let data = indices.map(item => this.state[item]);

    function numericSort(a, b) {
      if (b === undefined) return 1;
      if (a > b) return 1;
      if (a < b) return -1;
    }

    let sorterFunction = this.sortFunc === undefined ? numericSort : this.sortFunc;
    let sortedData = data.sort(sorterFunction);
    let newIndices = indices.sort(numericSort);

    newIndices.forEach((item, index) => this.state[item] = sortedData[index]);
    
    return this.state;
  }

  setComparator(compareFunction) {
    if (compareFunction === undefined) {
      return false;
    }
    // your implementation
    return this.sortFunc = compareFunction;
  }
}

module.exports = Sorter;