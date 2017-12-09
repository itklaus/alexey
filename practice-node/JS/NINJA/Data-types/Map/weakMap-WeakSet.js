// WeakMap and WeakSet
let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map
// we can get it by using map.keys()



weakMap.put(john, "secret documents");
// if john dies, secret documents will be destroyed



// WeakMap/WeakSet does not prevent the object removal from the memory.
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // works fine (object key)
weakMap.set("test", "Whoops"); // Error, because "test" is a primitive

let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // overwrite the reference
// john is removed from memory!



// …And WeakMap does not support methods keys(), values(), entries(), we can not iterate over it. So there’s really no way to receive all keys or values from it.

weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key, value)
weakMap.has(key)
