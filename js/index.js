// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Igor';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Murillo';

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

/* Using toUpperCase, split and join methods
const hacker1 = 'Igor'
let hacker1UpperCase = hacker1.toUpperCase();
console.log(hacker1UpperCase.split('').join(' '));
*/

// Using for loop, if and += 
let hackerDriver = "";
for(let i = 0;i<hacker1.length;i+=1){
    if(i==0){
        hackerDriver += `${hacker1[i].toUpperCase()}`;
    }else{
        hackerDriver += ` ${hacker1[i].toUpperCase()}`;
    };
}
console.log(hackerDriver);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let hackerNavigator = "";
for(let i = hacker2.length-1; i >= 0; i -= 1){
  hackerNavigator += hacker2[i];
}

console.log(hackerNavigator);

/* 
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if(hacker1 < hacker2){
        console.log("The driver's name goes first");
    }else if(hacker1 > hacker2){
        console.log("Yo, the navigator goes first definitely");
    }else if(hacker1 == hacker2){
        console.log("What?! You both have the same name?");
    }

/* 
Bonus 1
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

// Word count
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque augue in nisl lacinia, nec varius libero pharetra. Praesent in urna at dui rhoncus varius in et est. Fusce vel mauris risus. Donec auctor massa eu sem imperdiet auctor. Fusce commodo nunc quis diam auctor, nec consequat sem condimentum. Nullam ut libero nibh. Integer sed odio id nisl gravida mattis. Vestibulum at mattis lorem.

Aliquam imperdiet eget velit id semper. Aenean id iaculis urna. Pellentesque risus ante, scelerisque nec euismod vitae, ultrices sollicitudin est. Donec vel libero et quam tincidunt fringilla ut vel nunc. Pellentesque luctus condimentum gravida. Vivamus orci ipsum, pharetra sit amet metus eget, pharetra semper est. Proin mi mauris, malesuada in convallis sit amet, gravida nec purus. Vivamus quis augue metus. Proin bibendum blandit nunc, in cursus tellus dignissim semper.

Praesent ligula risus, rutrum a lacus nec, tincidunt imperdiet eros. Vestibulum vehicula dolor diam, dignissim finibus augue commodo cursus. Pellentesque elementum lacus commodo lorem volutpat, ut viverra libero gravida. Cras at congue ante. Curabitur nec volutpat massa, in sagittis enim. Aliquam erat volutpat. Maecenas egestas ligula non vehicula tempor. Morbi sed volutpat enim, tincidunt porttitor nunc. Phasellus nec pulvinar neque.`



let spacesCount = 0;
for(i = 0; i < loremIpsum.length; i += 1){
  if(loremIpsum[i] === ' '){
        spacesCount += 1;
    }
    if(loremIpsum[i] === '\n' && loremIpsum[i-1] !== '\n'){
        spacesCount++;
    }
}

let wordsCount = spacesCount + 1;
console.log(wordsCount);

// et count
let etCount = 0;
for(i = 0; i < loremIpsum.length; i += 1){
    if(loremIpsum[i-1] === ' ' && loremIpsum[i] === 'e' && loremIpsum[i+1] === 't' && (loremIpsum[i+2] === ' ' || loremIpsum[i+2] === '.' || loremIpsum[i+2] === ',')){
        etCount += 1;
    }
}
console.log(etCount);


/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome. 
Here are some examples of palindromes:
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" 
"No x in Nixon".
*/

let phraseToCheck = "Amor, roma";
let newPhraseToCheck = "";
let aux = 1;
for(let i = 0; i < phraseToCheck.length; i+=1){
    if(phraseToCheck[i] !== " " && phraseToCheck[i] !== "." && phraseToCheck[i] !== "?" && phraseToCheck[i] !== "," && phraseToCheck[i] !== "!"){
        newPhraseToCheck += phraseToCheck[i].toLowerCase();
    }
}
/*if(newPhraseToCheck.length % 2 == 0){ 
    for(let i = 0, j = newPhraseToCheck.length - 1; i <= newPhraseToCheck.length/2; i+=1,j-=1){
        if(newPhraseToCheck[i] !== newPhraseToCheck[j]){
            aux = 0;
            break;
        }
    }
*/ //}else{
    for(let i = 0, j = newPhraseToCheck.length - 1; i <= j; i+=1,j-=1){
        if(newPhraseToCheck[i] !== newPhraseToCheck[j]){
            aux = 0;
            break;
        }
    }   
//}
aux ? console.log("its a palindrome") : console.log("its not a palindrome");