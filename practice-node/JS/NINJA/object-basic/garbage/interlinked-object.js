function marry (man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: 'John'
}, {
  name: 'Ann'
})

// if we delete both link on object
delete family.father;
delete family.mother.husband;


// delete object
family = null;
