/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */

function parseStory(rawStory) {



  let reg = /\w+(\S\w+\W)?|\S/g;

  let regFun = rawStory.match(reg)
  
  console.log(regFun)
  
  const posMap = {
    n: 'noun',
    v: 'verb',
    a: 'adjective'
  }
  
  let objArray = regFun.map(word => {
    if(word.match(/\[.+\]/g)) {
      const newWord = word.slice(0, -3)
      const pos = posMap[word.slice(-2, -1)]
      return { newWord, pos }
      // console.log(word.slice(0, -3))
    } else {
      return { word }
      // console.log(word)
    }
  })
  
  console.log(objArray)


  }

  // Your code here.
  // console.log(rawStory)
  // return [{
  //   word:"hello",pos:"noun"
 // }]; // This line is currently wrong :)
//}

//rawstory is input, loop over story, check if the element has contains [. if true extract [n], by index of [ + 1, then we have to store it with a substring function that takes to 
//elements first is the index of the string and the second is the end of the mentioned index, if it's n create noun,, If it's false 
 

// let allFields = document.querySelectorAll(".input-form");

// for (let i = 0; i < allFields.length; i++) {

//     allFields[i].addEventListener("keyup", function(event) {

//         if (event.keyCode === 13) {
//             // console.log('Enter clicked')
//             event.preventDefault();
//             if (this.parentElement.nextElementSibling.querySelector('input')) {
//                 this.parentElement.nextElementSibling.querySelector('input').focus();
//             }
//         }
//     });

// }


/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */


getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });




//   Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
// * Output: [
// *  { word: "Louis", pos: "noun" },
// *  { word: "went", pos: "verb", },
// *  { word: "to", },
// *  { word: "the", },
// *  { word: "store", pos: "noun" }
// *  { word: "," }


// function parseStory(rawStory) {
//   const pos = {
//     n: "noun",
//     v: "verb",
//     a: "adjective"
//   };

//    // eliminate need for two word groups.
//    const reg = /((?<specialWord>\w+)(?<pos>[[nva]]))|(?<word>\w+)|(?<punctuation>[.,])/;

//    // edit expression to remove whitespace here
//    let storyArray = rawStory.split(/([,.\s])/g);

//    // bad way to remove whitespace
//    let filteredArray = storyArray.filter( function(item) {
//      return item !== ' ' && item !== '';
//    });

//    let results = [];


//    // loop through array and organize data to return specified object
//    for (let i = 0; i < filteredArray.length; i++) {
//      const groups = reg.exec(filteredArray[i]).groups;

//      if(groups.specialWord || groups.pos) {

//        results.push(
//          {
//            specialWord: groups.specialWord,
//            pos: pos[groups.pos[1]]
//          });

//      } else if(groups.word) {
//        results.push(
//          {
//            word: groups.word
//          });

//      } else {
//        results.push(
//          {
//            punctuation: groups.punctuation
//          });
//      }
//    }

//    return console.log(results);
//  }

//  parseStory(content);
