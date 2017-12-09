
// ?
let accessAllowed = (age > 18) ? true : false;

// Multiple '?'
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

// Non-traditional use of '?'
(company == 'Netscape') ?
  console.log('Right!') : console.log('Wrong.');
