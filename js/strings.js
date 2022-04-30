//STEP 1

/*
let name = prompt('Enter your name');
alert(`Your name is ${name.length} characters long.`);
*/

//STEP 2

/*
let name = prompt('Enter your name');
let index = prompt('Enter an index value');
let char = name.charAt(index);
if (char) {
    alert(`The character at index ${index} is "${char}".`);
} else {
    alert('The index you entered is either too small or large.');
}
*/

//STEP 3

/*
let firstName = prompt('Enter your first name');
let lastName = new String(prompt('Enter your last name'));
alert(`Your name is: ${firstName.concat(lastName)}`);
*/

//STEP 4

/*
let text = 'The quick brown fox jumps over the lazy dog';
alert(`"fox" first appears at index ${text.indexOf('fox')}.`);
*/

//STEP 5

/*
let text = 'The quick brown fox jumps over the lazy fox';
alert(`"fox" last appears at index ${text.lastIndexOf('fox')}.`);
*/

//STEP 6

/*
let text = 'The quick brown fox jumped over the lazy dog';
let name = prompt('Enter your full name');
alert(text.replace('the lazy dog', name));
*/

//STEP 7

/*
let text = 'The quick brown fox jumps over the lazy dog';
let word = prompt('Enter a word');
let index = text.search(word);
if (index > -1) {
    alert(`"${word}" first appears at index ${index}.`);
} else {
    alert(`"${word}" does not appear in the string.`);
}
*/

//STEP 8

/*
let old_string = 'The quick brown fox jumps over the lazy dog';
let start = old_string.indexOf('the lazy dog');
let end = start + 'the lazy dog'.length;
let new_string = old_string.slice(start, end);
alert(new_string.toUpperCase());
*/

//STEP 9

/*
let text = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
alert(text.trim().toLowerCase());
*/

//STEP 10

let text = 'the quick brown fox jumps over the lazy dog';
alert(text.slice(0, 1).toUpperCase().concat(text.slice(1)));

