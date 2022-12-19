// 교집합
Set.prototype[Symbol.for("intersection")] = function (set) {
  const reuslt = new Set();

  for (const value of set) {
    this.has(value) && reuslt.add(value);
  }

  return reuslt;
};
// 교집합
Set.prototype.intersection = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

// 합집합
Set.prototype[Symbol.for("union")] = function (set) {
  const result = new Set(this);

  for (const value of set) {
    result.add(value);
  }
  return result;
};

// 합집합
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

// 차집합
Set.prototype[Symbol.for("difference")] = function (set) {
  const result = new Set(this);

  for (const v of set) {
    result.delete(v);
  }

  return result;
};

// 차집합
Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

Set.prototype[Symbol.for("inSuperset")] = function (set) {
  for (const v of set) {
    if (!this.has(v)) return false;
  }
  return true;
};

Set.prototype.inSuperset = function (set) {
  return [...set].every((v) => [...this].includes(v));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA[Symbol.for("intersection")](setB));
console.log(setA.intersection(setB));

console.log(setA[Symbol.for("union")](setB));
console.log(setA.union(setB));

console.log(setA[Symbol.for("difference")](setB));
console.log(setA.difference(setB));

console.log(setA[Symbol.for("difference")](setB));
console.log(setA.difference(setB));

console.log(setA[Symbol.for("inSuperset")](setB));
console.log(setA.inSuperset(setB));
