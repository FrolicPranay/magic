let myMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    [true, "Boolean Key"],
    [{ id: 1 }, "Object Key"]
]);

console.log(myMap)

console.log(myMap.get("name")); // "Alice"
console.log(myMap.get(true)); // "Boolean Key"
