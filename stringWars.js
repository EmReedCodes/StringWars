//7kyu Isograms

//P str -word
//R boolean

//E puppy -> false more than one p

//P So I need to check if str includes an isogram. It can not have a duplicate and this is case insensitive

function isIsogram(str){
    //first Ill need to ensure str is all same case
    let sameCase = str.toLowerCase()
    //iterate through and on each char check if there is another
    for(let i = 0; i < sameCase.length; i++){
    //check if the char at the current iteration is the only one
      if(sameCase.indexOf(sameCase[i]) !== sameCase.lastIndexOf(sameCase[i])){
        return false
      }
    }
    return true
  }

//6kyu Framed Reflection
//At some point time complexity went out the window and it was about tweaking and praying

//P string (one word or more)
//R string 

//E 'Hello World' -> '*********\n* olleH *\n* dlroW *\n*********');
// "tyaavjk ifnyxe ywd" -> (see below)
//'***********\n* kjvaayt *\n* exynfi  *\n* dwy     *\n***********'

//P So I need to start and end with the longest string length + 4 in '*'
//if one word return top stars middle word and bottom stars
//if more than one word need to add an additional '\n' in between words
//if word length is shorter than longest pad it with space to make it same length

function mirror(text){
    //first reverse each word without reversing order of string
    let wordArr = text.split(' ').map(item => item.split('').reverse().join(''))
    //need to grab the length of the longest word
    let longestWord = wordArr.reduce((a, b) => a.length < b.length ? b: a).length
    //creating my star amount + the correct amount of spaces and \n
    let stars = '*'.repeat(longestWord + 4)
    let firstStars = stars + '\n*' + ' '
    let secondStars =  '*\n' + stars
    //if its only one word all I have to do is return it with the stars
    if(wordArr.length == 1){
      return firstStars + wordArr.join() + ' ' + secondStars
    }
    //needed iterate and add extra *\n* to all but the last one
    let addMiddle = wordArr.map((item, idx) => idx !== wordArr.length - 1 ? item.padEnd(longestWord, ' ') + ' ' + '*\n*' : item.padEnd(longestWord, ' ') + ' ').join(' ')
    return firstStars + addMiddle + secondStars
  }