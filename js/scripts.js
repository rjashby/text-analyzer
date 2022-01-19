// Utility Logic

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// ORIGINAL

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// REMOVE PUNCTUATION 

function removePunctuation(text) {
  const punctArray = [",", ".", ";", ":", "?", "!", "-"];
  const removePunct = text.split("")
  let noPunctArray = []
  removePunct.forEach(function(character) {
    if (!(punctArray.includes(character))) { 
    noPunctArray.push(character)
    }
  });
  return noPunctArray.join("");
  console.log(noPunctArray)
};

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function offensive(text) {
  const wordsToOmit = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let wordArray = text.toLowerCase().split(" ");
  let newArray = [];
  wordArray.forEach(function(word) {
    if (!word.includes("zoinks")) { 
      newArray.push(word);
    }
  })
  return newArray.join(" ");
}

function offensive(text) {
  const wordsToOmit = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let wordArray = text.toLowerCase().split(" ");
  let newArray = [];
  wordArray.forEach(function(word) {
    if (!word.includes("zoinks")) { 
      newArray.push(word);
    // } else if (!word.includes("muppeteer")) { 
    //   newArray.push(word);
    // } else if (!word.includes("biffaroni")) { 
    //   newArray.push(word);
    // } else if (!word.includes("loopdaloop")) { 
    //   newArray.push(word);
    }
  return newArray;
  })
}

function mostUsedWords(text) {
  text = text.toLowerCase();
  let wordArray = text.split(" ");
  wordArray.sort();
  let wordCount = 1;
  let countArray = [];
  wordArray.forEach(function(word, index) {
    if (word === wordArray[index+1]) {
      wordCount ++;
    } else {
      countArray.push([wordCount, word]);
      wordCount = 1;
    }
  countArray.sort();
  countArray.reverse();
  });
  console.log(countArray);
};

// FOR LOOP

function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    console.log(i);
    if (word === textArray[i]) {
      return i;
    }
  }
  return -1;
}

// FOR EACH

function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  let position = -1;
  textArray.forEach(function(element, index) {
    console.log(index);
    if ((word === element) && (position === -1)) {
      position = index;
    }
  });
  return position;
}

// function omitOffensiveWords(text) {
//   const dirtyWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
//   let noPunctuation = removePunctuation(text);
//   noPunctuation.toLowerCase();
//   const dirtyArray = noPunctuation.split(" ");
//   let cleanArray = [];
//   dirtyArray.forEach(function(word) {
//     if (!(dirtyWords.includes(word))) {
//       cleanArray.push(word);
//     }
//   });
//   console.log(cleanArray.join(" "))
//   return cleanArray.join(" ")
// }

// function omitOffensiveWords(text) {
//   const wordsToOmit = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
//   let wordArray = text.toLowerCase().split(" ");
//   wordArray.forEach(function(word, index) {
//     if (word.includes("zoinks")) {
//       wordArray.splice(index, 1, "censored");
//     }
//   })
//   console.log(wordArray)
// }
 
// if text includes zoinks
//   splice()
// else if text incles muppeteer


// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});





// function noPunct(eachCharacterArray) {
//   const punctArray = [",", ".", ";", ":", "?", "!", "-"];
//   if (punctArray.includes(eachCharacterArray.at(-1))) {
//     eachCharacterArray.pop();
//   }
//   eachCharacterArray.forEach(function(char) {
//     if (punctArray.includes(char)) {
//       eachCharacterArray.splice(eachCharacterArray.indexOf(char), 1);
//     } 
//   });
//   return eachCharacterArray.join("")
// }



