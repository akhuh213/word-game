
// start screen first thing to show up for the game
// show instructions
// start game button when clicked display first word(image) and letters
// with each word functions that allows users to match the letters 
// when user select the letter, if it's right, the letter disappers 
// and displayed in the first blank
// if it's wrong, just switch turns
// once all the letters been clicked for the letter, function to check if the letter matches the word
// if player gets the letter right, he will gets score
// when all letters got right, check the point to see who is the winner
// and display who is the winner
// if it's a tie, display it's a tie 




const allWords = [
    {
        word: "cat",
        image: "letters/word_images/download.jpeg"
    },
    {
        word: "apple",
        image: "letters/word_images/apple.jpeg"
    },    
    {
        word: "banana",
        image: "letters/word_images/banana.jpeg"
    },
    {
        word: "cup",
        image: "letters/word_images/cup.jpeg"
    },
    {   
        word: "tree",
        image: "letters/word_images/tree.jpeg"
    }
   
]

const allLetters = [
    {
        letter: "a",
        image: "letters/letter_A.png"
    },
    {
        letter: "b",
        image: "letters/letter_B.png"
    },
    {
        letter: "c",
        image: "letters/letter_C.png"
    },
    {   
        letter: "e",
        image: "letters/letter_E.png"
    },
    {
        letter: "l",
        image: "letters/letter_L.png"
    },
    {
        letter: "n",
        image: "letters/letter_N.png"
    },
    {
        letter: "p",
        image: "letters/letter_P.png"
    },
  
    {
        letter: "r",
        image: "letters/letter_R.png"
    },
    {
        letter: "t",
        image: "letters/letter_T.png"
    },
    {
        letter: "u",
        image: "letters/letter_U.png"
    }
]

const blank = [
    {
        name: "blankA",
        image: "blank_400x400.jpg"
    },
    {
        name: "blankB",
        image: "blank_400x400.jpg"
    },
    {
        name: "blankC",
        image: "blank_400x400.jpg"
    },
    {
        name: "blankD",
        image: "blank_400x400.jpg"
    },
    {
        name: "blankE",
        image: "blank_400x400.jpg"
    },
    {
        name: "blankF",
        image: "blank_400x400.jpg"
    }

]
const player = ["Rabbit","Lion"]


const gameElements = document.querySelector(".game-elements")
const letterOptions = document.querySelector(".letter-options")
const showingImage = document.querySelector("#showing-image")
const imgDisplay = document.querySelector(".img-display")
const rabbitList = document.querySelector("#rabbit-list")
const lionList = document.querySelector("#lion-list")
const rabbit = document.querySelector("#rabbit")
const lion = document.querySelector("#lion")

let currentIndex = Math.floor(Math.random() * allWords.length);
var imgName = allWords[currentIndex].word
var imgNameArray = imgName.split('')








function displayImage(){
    const word = allWords[currentIndex]
    showingImage.src = word.image
    showingImage.setAttribute('alt',word.word)
    
}
displayImage()


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let optionLettersArray = []
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

compareLetter()





function displayLetter(){
    for(i=0; i<optionLettersArray.length; i++){
        let randomLetter = optionLettersArray[i];
        const letterBlock = document.createElement("img")
        letterBlock.src = randomLetter.image
        letterBlock.setAttribute('alt',randomLetter.letter)
        letterOptions.appendChild(letterBlock)
    }
}
displayLetter()



function displayBlankBox(){
    for (i=0; i< imgNameArray.length; i++){
        const currentBox = blank[i];
        const blankBox = document.createElement("img")
            blankBox.src = currentBox.image
            blankBox.setAttribute('alt',currentBox.name)
            blankBox.setAttribute("id", 'blank-box')
            gameElements.appendChild(blankBox)                    
    }
    
}
displayBlankBox()

document.addEventListener('DOMContentLoaded', ()=> {

    letterOptions.addEventListener("click", switchTurn)
    
        let gameTurn = 1
        let currentPlayer = null;
        
        function switchTurn() {
            console.log(gameTurn)
            if(gameTurn%2 == 0){
                currentPlayer = player[1]
                gameTurn++
                lion.style.backgroundColor = "yellow"
                rabbit.style.backgroundColor = "springgreen"
            return(givingPoint)
    
            }else{
                currentPlayer = player[0]
                gameTurn++
                rabbit.style.backgroundColor = "yellow"
                lion.style.backgroundColor = "springgreen"
            return(givingPoint)                    
            }            
        }
    
        let rabbitPoint = 0;
        let lionPoint = 0;



        function givingPoint(){
    
            if (currentPlayer === player[0]){ 
                const starPoint = document.createElement("img")     
                starPoint.src = "star.png"
                starPoint.setAttribute("id",'star-point')
                const pointHolder = document.createElement("li")
                rabbitList.appendChild(pointHolder)
                pointHolder.appendChild(starPoint) 
                    rabbitPoint ++
            }else {
                const heartPoint = document.createElement("img")
                heartPoint.src = "heart.png" 
                heartPoint.setAttribute("id",'heart-point')
                lionList.appendChild(heartPoint)
                    lionPoint ++     
            }
                return (winningCondition)
        }


        

        function reset(){
            location.reload()
           
        }



        
        function winningCondition(){
            const winContainer = document.querySelector(".win-message")
            const winImg = document.createElement("img")
            winImg.setAttribute('id','win-img')
            const winTxt = document.createElement("h2")
            winTxt.setAttribute('id','win-txt')
            const resetButton = document.createElement("button")
            resetButton.setAttribute('id','reset-button')
            resetButton.type = resetButton
            resetButton.innerText = 'Again!'
            resetButton.addEventListener("click", reset)
            

            if (rabbitPoint < lionPoint){
                winImg.src = "goodJob.png"
                winContainer.appendChild(winImg)
                winTxt.innerText = "You are the Winner, Lion! 🦁   "
                winContainer.appendChild(winTxt)
                winContainer.appendChild(resetButton)
                rabbit.style.backgroundColor = "yellow"
                lion.style.backgroundColor = "yellow"
                
                


                
            }else if (lionPoint < rabbitPoint){
                winImg.src = "goodJob.png"
                winContainer.appendChild(winImg)
                winTxt.innerText = "You are the Winner, Rabbit! 🐰   "
                winContainer.appendChild(winTxt)
                winContainer.appendChild(resetButton)
                rabbit.style.backgroundColor = "yellow"
                lion.style.backgroundColor = "yellow"
                
            
            }else{
                winImg.src = "tie-img.jpg"
                winContainer.appendChild(winImg)
                winTxt.innerText = "It's a tie! Let's play again!"
                winContainer.appendChild(winTxt)
                winContainer.appendChild(resetButton)
                rabbit.style.backgroundColor = "yellow"
                lion.style.backgroundColor = "yellow"
                
            }
        }
    



 
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

    function secondClicked(event){
        
        if(event.target.alt == imgNameArray[1]){
            
            givingPoint()
               
                
            document.querySelector("img[alt='blankB']").src = event.target.src  
            letterOptions.addEventListener('click', thirdClicked)
            letterOptions.removeEventListener('click', secondClicked)
            event.target.src = allLetters[1].image;
            event.target.alt = allLetters[1].letter;
            
        }else{
            
                   
        }
    }

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
    function fourthClicked(event){
        if(event.target.alt == imgNameArray[3]){
            
            givingPoint()
            document.querySelector("img[alt='blankD']").src = event.target.src
                if(imgNameArray.length>4){
                letterOptions.addEventListener('click', fifthClicked)
                letterOptions.removeEventListener('click', fourthClicked)
                event.target.src = allLetters[3].image;   
                event.target.alt = allLetters[3].letter; 
                }else{
                    letterOptions.style.display = "none"
                    winningCondition()
                }      
        }else{
             
        } 
        
    }
    function fifthClicked(event){
        if(event.target.alt == imgNameArray[4]){
            
            givingPoint()
            document.querySelector("img[alt='blankE']").src = event.target.src
                if(imgNameArray.length>5 ){
                letterOptions.addEventListener('click', sixthClicked)
                letterOptions.removeEventListener('click', fifthClicked)
                event.target.src = allLetters[4].image;
                event.target.alt = allLetters[4].letter;    
                }else{
                    letterOptions.style.display = "none"
                    winningCondition()
                }      
        }else{
             
        } 
        
    }
    function sixthClicked(event){
        if(event.target.alt == imgNameArray[5]){
            event.target.style.display = 'none'
            givingPoint()            
            document.querySelector("img[alt='blankF']").src = event.target.src
            winningCondition()
        }else{
                       
        }         
    }
 
    



    })




// function shuffle(allWords) {
//     var m = allWords.length, t, i;
//     while (m) { 
//       i = Math.floor(Math.random() * m--);
//       t = allWords[m];
//       allWords[m] = allWords[i];
//       allWords[i] = t;
//     }
//   }

//correct or wrong function 
//if correct, let the image disappeared, and appear on where it was
// point ++1
// switch turn 
// moves to blank B 

//else => swtich turn 


// letterC.addEventListener("click", letterClicked)

// function letterClicked(event){
//     console.log(event.target)
// }

// const changeImage = () => {
// if(letterC.src.onclick){
//     blankA.src = "letters/letter_C.png" }
// }



 
// image appears
// blank appears
// options appears

//event listner 
// choose option
//check if it's right or not 
//if it's right 
// chosen option disappears
// the letter appears on the blank 
// the player gets the point 
// go to the next page 

//if it's wrong
//turn switch 

//switch turns

// winning condition 
// 