# word-game
word games for children 


## Javascript 

### Displaying the question img with the right letter square img
Made an array of letter by spliiting the word. Used two for loops to match right letters in two different arrays to display on browser by creating and appending img elmement. 

``` JavaScript
var imgName = allWords[currentIndex].word
var imgNameArray = imgName.split('')
for (i=0; i< imgNameArray.length; i++){
    for (j=0; j< allLetters.length; j++){
        if(imgNameArray[i] == allLetters[j].letter){
            const currentLetter = allLetters[j];
            const letterBlock = document.createElement("img")
            letterBlock.src = currentLetter.image
            letterBlock.setAttribute('alt',currentLetter.letter)
            gameElements.appendChild(letterBlock)
            
            break 
        }
    }
}
```