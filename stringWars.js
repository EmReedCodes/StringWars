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


//7kyu find the capitals
//Meh too easy so I added a helper function to practice with those more


//P string
//R array of itegers at index 
//E 'hELoO' -> [1, 2, 4]
//P Need to check string and place any indexes that contain a capital letter into a new array in order.

var capitals = function (word) {
	//create array to place indexs
  const capitalIndex = []
  //will need to iterate through the word now and check each letter
  for(let i = 0; i < word.length; i++){
    //take letter and go to function checkLetter to test if its capital or not
    if(checkLetter(word[i])){
    //if so push the index
      capitalIndex.push(i)
    }
  }
  //return my array of indexes
  return capitalIndex
};

function checkLetter(letter){
  //if word[i] matches word[i] uppercased return true, else return false
  return letter == letter.toUpperCase()
}

//6kyu Who Likes This?
//I thought about loops but why add time complexity when its not needed? 

// //P array of strings
// //R string 
// //E [peter] -> peter likes this
// //P Create a new sentence depending on how many names in array. If one just likes this, if two Jacob and Alex, if three add comma, more than 3 by how many names left after using first 3

function likes(names) {
  if(names.length == 0) return 'no one likes this'
  if(names.length == 1) return `${names} likes this`
  if(names.length == 2) return `${names[0]} and ${names[1]} like this`
  if(names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

likes([])//, 'no one likes this');
likes(['Peter'])//, 'Peter likes this');
likes(['Jacob', 'Alex'])//, 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark'])//, 'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max'])//, 'Alex, Jacob and 2 others like this')


//6kyu Your order, please
//I really liked this one. I saw a solution awhile back using a helper function to sort and I thought this would work perfect here (and it did)


//P string of words containing a num inside each word
//R string sorted by nums inside
//E "" -> ""
//  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//P I need to sort each word by the number it contains in ascending order.
//if I use a helper function to split the word itself find the number and just sort by the number

function order(words){
    //splitting into words here so I can use sort method 
    //in sort run my helper function and sort the words by the number in findNum then join them back to a string plz
    return words.split(' ').sort((a, b) => findNum(a) - findNum(b)).join(' ')
  }
  
  function findNum(str){
    //hey friend can you help and split my word into chars now and if not between '0' and '9' (comparison operators) keep looking? k thanks, oh when you find it stop
    return str.split('').find(item => item >= '0' && item <= '9')
  }
   
  
