class Group {
  //The constructor creates and object with a "content" property with an empty array
  constructor() {
    this.content = []
  }
  // The object has an "add" method that pushes new elements into the content array ONLY IF the element is not already there
  add(x) {
    if (!this.content.includes(x)) this.content.push(x);
  }
  // "delete" method splices 1 element from the content array, starting from the index that belongs to the element that is passed
  // to the function. For this reason we need an if statement to prevent deletion when whe element is not in the array
  // this would delete the last item in the array (as indexOf would produce -1)
  delete(x) {
    if (this.content.indexOf(x) != -1) {
      this.content.splice(this.content.indexOf(x), 1)
    };
  }
  // "has" returns true if the item is found in the array
  has(x) {
    return this.content.includes(x);
  }
  // this method populates a new group with the elements passed to as teh argument (i.e., the "collection")
  static from(collection) {
    let newG = new Group();
    for (let item of collection) {
      newG.add(item);
    }
    return newG
  }
  //this method substutites the standard iterator method by calling the class GroupIterator, defined below
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

//this generates an iterator object, with an index that starts at 0 and an content array extracted from the instance of group
//passed as an argument
class GroupIterator {
  constructor(o) {
    this.index = 0;
    this.content = o.content;
  }
  // the "next" function is in charge of the iteration. It stops when the index reaches the end of the array
  // it outputs the value and increments the index by one when it's not at the end of the array.
  next() {
    if (this.index == this.content.length) return { done: true };
    let value = this.content[this.index];
    this.index++;
    return { value, done: false }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
  // → a
  // → b
  // → c