
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

//const charIndex = 0


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
        imgae: "letters/letter_P.png"
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
    }
]
const player = ["Elephant","Lion"]


const gameElements = document.querySelector(".game-elements")
const letterOptions = document.querySelector(".letter-options")
const showingImage = document.querySelector("#showing-image")
const imgDisplay = document.querySelector(".img-display")

let currentIndex = 0
var imgName = allWords[currentIndex].word
var imgNameArray = imgName.split('')






function displayImage(){
    
        const word = allWords[currentIndex]
        console.log(word)
        showingImage.src = word.image
        showingImage.setAttribute('alt',word.word)
    
}
displayImage()



function displayLetter(){

for (i=0; i< imgNameArray.length; i++){
    for (j=0; j< allLetters.length; j++){
        if(imgNameArray[i] == allLetters[j].letter){
            const currentLetter = allLetters[j];
            const letterBlock = document.createElement("img")
            letterBlock.src = currentLetter.image
            letterBlock.setAttribute('alt',currentLetter.letter)
            letterOptions.appendChild(letterBlock)
            
            break 
        }
    }
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




const starPoint = document.createElement("img")
starPoint.setAttribute("id",'star-point')
const heartPoint = document.createElement("img")
heartPoint.setAttribute("id",'heart-point')
imgDisplay.appendChild(starPoint)
imgDisplay.appendChild(heartPoint)



function givingPoint(){

    if (currentPlayer === player[0]){       
        starPoint.src = "star.png"
    }else {
        heartPoint.src = "heart.png"        
    }
}


letterOptions.addEventListener("click", switchTurn)
let gameTurn = 1
let currentplayer = null;
    function switchTurn() {
        
        if(gameTurn%2 == 0){
            currentPlayer = player[0]
            gameTurn ++
        }else{
            currentPlayer = player[1]
            gameTurn++
        }console.log(currentPlayer)
        }
        
    


document.addEventListener('DOMContentLoaded', ()=> {

    // function hide(e){
    //     e.currentTarget.style.visibility = 'hidden';
    //     for(var i = 0; i < imgNameArray.length; i++)
    //     letterOptions[i].addEventlistener('click', hide, false);
    // }



letterOptions.addEventListener("click", letterClicked)
  
    function letterClicked(event){
        console.log(event.target)
        console.log(event.target.alt)
        
        
        
        if(event.target.alt == imgNameArray[0]){
            console.log("yes!")
            event.target.style.visibility = 'hidden' 
            givingPoint()
            currentPlayer = player[0]
            document.querySelector("img[alt='blankA']").src = event.target.src
            letterOptions.addEventListener('click', secondClicked)
            // letterOptions.removeEventListener('click', letterClicked)
        }else{
            currentPlayer = player[0]
            console.log('nooo') 
        }        
    }

    function secondClicked(event){
        
        if(event.target.alt == imgNameArray[1]){
            event.target.style.visibility = 'hidden'
            givingPoint()    
            currentPlayer = player[1]      
            document.querySelector("img[alt='blankB']").src = event.target.src  
            letterOptions.addEventListener('click', thirdClicked)
            // letterOptions.removeEventListener('click', secondClicked)
        }else{
            currentPlayer = player[1]       
        }
    }

    function thirdClicked(event){
        
        if(event.target.alt == imgNameArray[2]){
            event.target.style.visibility = 'hidden'
            givingPoint()
            currentPlayer = player[0]
            document.querySelector("img[alt='blankC']").src = event.target.src            
                if(imgNameArray.length>3){
                letterOptions.addEventListener('click', fourthClicked)
                // letterOptions.removeEventListener('click', thirdClicked)
                }else{console.log("make a winning condition")
            }   
        }else{
            currentPlayer = player[0]
        } 
        
    }
    function fourthClicked(event){
        if(event.target.alt == imgNameArray[3]){
            console.log("yes!")
            event.target.style.visibility = 'hidden'
            givingPoint()
            document.querySelector("img[alt='blankD']").src = event.target.src
                if(imgNameArray.length>4){
                letterOptions.addEventListener('click', fifthClicked)
                letterOptions.removeEventListener('click', fourthClicked)    
                }      
        }else{
            console.log('nooo') 
        } 
        
    }
    function fifthClicked(event){
        if(event.target.alt == imgNameArray[4]){
            console.log("yes!")
            event.target.style.visibility = 'hidden'
            givingPoint()            
            document.querySelector("img[alt='blankE']").src = event.target.src
        }else{
            console.log('nooo') 
            currentPlayer = player[1]            
        }         
    }

    
startButton = document.querySelector('button')

startButton.addEventListener("click", (e) => {
    e.preventDefault()    

})
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