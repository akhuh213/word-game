// word 

const allWords = [
    {
        word: "cat",
        image: "assets/letters/word_images/download.jpeg"
    },
    {
        word: "apple",
        image: "assets/letters/word_images/apple.jpeg"
    },    
    {
        word: "banana",
        image: "assets/letters/word_images/banana.jpeg"
    },
    {
        word: "cup",
        image: "assets/letters/word_images/cup.jpeg"
    },
    {   
        word: "tree",
        image: "assets/letters/word_images/tree.jpeg"
    }
   
]

// letter box 

const allLetters = [
    {
        letter: "a",
        image: "assets/letters/letter_A.png"
    },
    {
        letter: "b",
        image: "assets/letters/letter_B.png"
    },
    {
        letter: "c",
        image: "assets/letters/letter_C.png"
    },
    {   
        letter: "e",
        image: "assets/letters/letter_E.png"
    },
    {
        letter: "l",
        image: "assets/letters/letter_L.png"
    },
    {
        letter: "n",
        image: "assets/letters/letter_N.png"
    },
    {
        letter: "p",
        image: "assets/letters/letter_P.png"
    },
  
    {
        letter: "r",
        image: "assets/letters/letter_R.png"
    },
    {
        letter: "t",
        image: "assets/letters/letter_T.png"
    },
    {
        letter: "u",
        image: "assets/letters/letter_U.png"
    }
]
//blank box 

const blank = [
    {
        name: "blankA",
        image: "assets/blank_400x400.jpg"
    },
    {
        name: "blankB",
        image: "assets/blank_400x400.jpg"
    },
    {
        name: "blankC",
        image: "assets/blank_400x400.jpg"
    },
    {
        name: "blankD",
        image: "assets/blank_400x400.jpg"
    },
    {
        name: "blankE",
        image: "assets/blank_400x400.jpg"
    },
    {
        name: "blankF",
        image: "assets/blank_400x400.jpg"
    }

]

const player = ["Rabbit","Lion"]

const gameElements = document.querySelector(".blank-box")
const letterOptions = document.querySelector(".letter-options")
const showingImage = document.querySelector("#showing-image")
const imgDisplay = document.querySelector(".img-display")
const rabbitList = document.querySelector("#rabbit-list")
const lionList = document.querySelector("#lion-list")
const rabbit = document.querySelector("#rabbit")
const lion = document.querySelector("#lion")

//in order to display image in random order 
let currentIndex = Math.floor(Math.random() * allWords.length);
var imgName = allWords[currentIndex].word
var imgNameArray = imgName.split('')


function displayImage(){
    const word = allWords[currentIndex]
    showingImage.src = word.image
    showingImage.setAttribute('alt',word.word)
    
}
displayImage()

// for letter box displayed randomly, also replace the box with random letter box
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

//compare letter with splitted word, and put shuffle the letter box 
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

// displaying letterbox from the shuffled array
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

// displaying blank box as many as number of the splitted word (each letter)
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
    //switching turn 
    letterOptions.addEventListener("click", switchTurn)
    
    let gameTurn = 1
    let currentPlayer = null;
        
    function switchTurn() {
            
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
    
    // what to happen when the letter is clicked     
letterOptions.addEventListener("click", letterClicked)
    
    shuffle(allLetters) //clicked right letter will be replaced with the random letter
    
    function addLetter(letter){
        event.target.src = letter.image;
        event.target.alt = letter.letter;
    }


    function letterClicked(event){
                     
            if(event.target.alt == imgNameArray[0]){
                            
                givingPoint()         
                document.querySelector("img[alt='blankA']").src = event.target.src
                letterOptions.addEventListener('click', secondClicked)
                letterOptions.removeEventListener('click', letterClicked)
                addLetter(allLetters[0])
            }else{                
            }        
        }

        function secondClicked(event){
            
            if(event.target.alt == imgNameArray[1]){
                
                givingPoint()                
                document.querySelector("img[alt='blankB']").src = event.target.src  
                letterOptions.addEventListener('click', thirdClicked)
                letterOptions.removeEventListener('click', secondClicked)
                addLetter(allLetters[1])                 
                            
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
                    addLetter(allLetters[2])
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
                    addLetter(allLetters[3]) 
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
                    addLetter(allLetters[4])

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
                letterOptions.style.display = "none"
                winningCondition()

            }else{                           
            }         
        }

        //point system

        let rabbitPoint = 0;
        let lionPoint = 0;

        function givingPoint(){
            
            if (currentPlayer === player[0]){ 
                const starPoint = document.createElement("img")     
                starPoint.src = "assets/star.png"
                starPoint.setAttribute("id",'star-point')
                rabbitList.appendChild(starPoint) 
                    rabbitPoint ++
            }else {
                const heartPoint = document.createElement("img")
                heartPoint.src = "assets/heart.png" 
                heartPoint.setAttribute("id",'heart-point')
                lionList.appendChild(heartPoint)
                    lionPoint ++     
            }
            return (winningCondition)
    
        }

        function winMsg (msg,imgsrc){
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
            winImg.src = imgsrc
            winContainer.appendChild(winImg)
            winTxt.innerText = msg
            winContainer.appendChild(winTxt)
            winContainer.appendChild(resetButton)
            
            rabbit.style.backgroundColor = "yellow"
            lion.style.backgroundColor = "yellow"
        }


        //winning condition
        function winningCondition(){


            if (rabbitPoint < lionPoint){
                winMsg(" You are the winner, Lion! 🦁 ", "assets/goodjob.png")

            }else if (lionPoint < rabbitPoint){
                winMsg(" You are the winner, Rabbit! 🐰 ", "assets/goodjob.png")
            
            }else{
               winMsg("It's a tie! Let's try again!", "assets/tie-img.jpg")
                
            }
        }
        // reset when the button is clicked 
        function reset(){
            location.reload()   
        }
})





