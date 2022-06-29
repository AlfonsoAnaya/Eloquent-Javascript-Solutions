class Group {
    constructor() {
      this.content = []
    }
    add(x) {
      if(!this.content.includes(x)) this.content.push(x);
    }
    delete(x) {
      this.content.splice(this.content.indexOf[x],1);
    }
    has(x) {
        return this.content.includes(x);
    }
    static from (collection) {
      let newG = new Group();
      for (let item of collection) {
        newG.add(item);
      }
      return newG
    }
    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
  }
  
  class GroupIterator {
    constructor(o) {
        this.index = 0;
      this.content = o.content;
    }
    next() {
      if (this.index == this.content.length) return {done: true};
      let value = this.content[this.index];
      this.index++;
      return {value, done: false}
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c