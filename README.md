
# Spelling game 


### Game description
This is a spelling game designed for preschooler to kindergartener to improve spelling. Two players will take turns after each click. The image of object will be displayed with options of letter-boxes that players can choose. Players need to click the correct letter box for each letter of the displayed image. If the image of object is "tree", the player need to click the first letter "t" from the letter-boxes. If the player click the correct letter, the player will get the points, and next player need to click the next letter of the word. If any of players gets the last letter correct, the game will be over, and the player who gets more points will be the winner of the game.  

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

Made a letter array by splitting the word. Ran two for loops to find the match for each split letter with letter-box. Pushed matched letter boxes into a new array, and shuffled them using shuffle function shown below.  

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
When the letter-box is clicked, it will check whether the correct box was clicked or not. If it is correct, that letter box will placed in the corresponding blank box. Also, the clicked letter box in the options will be replaced with other random letter. 

As shown in the snippet below, when the first correct letter-box is clicked, the blank box.src is replaced with the clicked correct letter. For the random letter box, shuffle function was used again.
event.target.alt is also changed so that the replaced random letter can be used as the correct letter when needed. Most important thing to add new random letter was that the event.target.src has to be changed after eventlistener is removed. Otherwise, the correct letter box that is replaced with the blank box will also be changed to the random letter box. 


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

Because all words in this game has at least 3 letters, number of left letters are checked after third letter got right.  
If the last letter was clicked, call the winningCondition function to end the game. 
When the game is over, set the style of letter option container as “none”, and displayed the result message in the same place. 

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
For winning condition, the points that each player recieved were compared.  




