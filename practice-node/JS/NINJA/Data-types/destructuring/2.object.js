// let {var1, var2} = {var1:…, var2…}


let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
// If we want to assign a property to a variable with another name, for instance, options.width to go into the variable named w, then we can set it using a colon:
let {width: w, height: h, title} = options;
let {width = 100, height = 200, title} = options;
let {width: w = 100, height: h = 200, title} = options;
let {title, ...rest} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200




// Nested destructuring
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true    // something extra that we will not destruct
};

// destructuring assignment on multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut




// Smart function parameters
// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options);
