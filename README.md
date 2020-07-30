
# Spelling game 


### Game description
This is a spelling game designed for preschool to kidnergarthen aged children to help their learning of spelling and words. Two players will take turns after every click. An image of object will be desplayed with letter boxes that players can choose from. Players need to click the correct letter box for the first letter of the displayed image. If the image of object is "tree", the player need to click letter "t" from the letter-boxes. The letter-boxes will be desplayed in random order, and the clicked correct box will be shown in the blank box, and a new random letter box will be added to the letter options. If the player click the correct letter, the player will get the points, and next player take the turn. If any player gets the last letter correct, the game will be over, and whoever gets more points will be the winner of the game. 

### Technology
 - html
 - css
 - JavaScript 

### Javascript 

#### Displaying random object image when starting new game


```JavaScript

let currentIndex = Math.floor(Math.random() * allWords.length);
var imgName = allWords[currentIndex].word

function displayImage(){
    const word = allWords[currentIndex]
    showingImage.src = word.image
    showingImage.setAttribute('alt',word.word)
    
}
displayImage()
```
<br></br>
#### Displaying the matched letter-boxes

##### 1. Compare letters

Made an array by spliting the object word into each letter. Ran two for loops to find the match for each splitted letter with letter-box. Pushed matched letter boxes into a new array, and shuffeld them using shuffle function shown below. 

``` JavaScript

var imgNameArray = imgName.split('')

function compareLetter(){

for (i=0; i< imgNameArray.length; i++){
    for (j=0; j< allLetters.length; j++){
        if(imgNameArray[i] == allLetters[j].letter){
            const currentLetter = allLetters[j];
            optionLettersArray.push(currentLetter)
            shuffle(optionLettersArray)
            break
        }
    }
} 
}
```

##### 2. Shuffle array

``` JavaScript

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

```

##### 3. Display Letter-boxes 

```JavaScript
function displayLetter(){
    for(i=0; i<optionLettersArray.length; i++){
        let randomLetter = optionLettersArray[i];
        const letterBlock = document.createElement("img")
        letterBlock.src = randomLetter.image
        letterBlock.setAttribute('alt',randomLetter.letter)
        letterOptions.appendChild(letterBlock)
    }
}
```
<br></br>
### When the letter-box is clicked 
When the letter-box is clicked, need to check whether it is correct or not, and if it's correct answer, that letter box need to replace the blank box. Also, the letter box in the options need to be replaced with other random letter. 

As shown in the snippet below, when the first correct letter-box is clicked, the blank box.src is replaced with the clicked correct letter. For the random replacing letter, I used shuffle function again to shuffle whole letter boxes. I also changed
event.target.alt so that the replaced letter also can be used as the correct letter when needed. Most important thing to add new random letter in the letter options was that the event.target.src need to be changed after eventlistener is removed. Otherwise, the correct letter box that is replaced with the blank box will also be changed to the random letter box. 


```JavaScript
    letterOptions.addEventListener("click", letterClicked)
        shuffle(allLetters) 
        function letterClicked(event){
                     
            if(event.target.alt == imgNameArray[0]){
                            
                givingPoint()         
                document.querySelector("img[alt='blankA']").src = event.target.src
                letterOptions.addEventListener('click', secondClicked)
                letterOptions.removeEventListener('click', letterClicked)
                event.target.src = allLetters[0].image;
                event.target.alt = allLetters[0].letter;
            }else{     
            }        
        }
```          
<br></br>
### Winning condition 

Because the minimun number of letters in the word lists are 3, from thrid letter, need to check if there are more letters left. If this was the last letter, call the winningCondition function to end the game. Otherwise, go to next click. 
When the game is over, I set the style of letter option container as "none" to display the result message in the same place. 

``` JavaScript
        function thirdClicked(event){
            
            if(event.target.alt == imgNameArray[2]){
                
                givingPoint()
                document.querySelector("img[alt='blankC']").src = event.target.src            
                
                if(imgNameArray.length>3){
                    letterOptions.addEventListener('click', fourthClicked)
                    letterOptions.removeEventListener('click', thirdClicked)
                    event.target.src = allLetters[2].image;
                    event.target.alt = allLetters[2].letter;
                }else{
                    letterOptions.style.display = "none"
                    winningCondition()
                }   
            }else{               
            }             
        }
```
For winning condition, I simply compared the points they recieved between two players using if statement. 




