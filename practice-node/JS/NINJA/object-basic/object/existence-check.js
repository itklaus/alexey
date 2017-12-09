let user = {};

console.log(user.nuSuchProperty === undefined); // true, if you have propertie "undefied" return false
console.log( "age" in user ); // false, user.age doesn't exist
