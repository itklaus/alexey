let arg = prompt('Enter a value?')
switch (arg) {
  case '0':
  case '1':
    console.log('one or zero');
    break;
  case '2':
    console.log('Two');
    break;
  default:
    console.log('An Unknown value');
}
