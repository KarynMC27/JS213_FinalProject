
//I wrote lots of notes on places where I couldn't quite get where I wanted.
//I would also appreciate any tips on how to clean this up and make it look more professional.
//I think this could be a template I could adjust for e.g. portfolios with some additional work. 
//Additionally, is there a way to send things from the front end to the backend? For example, if I wanted to be able to add more Sadie pictures from the front end?

//variables

//buttons 

const buttons = document.querySelectorAll(`button`)
const sadieButton = document.querySelector(`#sadie_button`)
const mannyButton = document.querySelector(`#manny_button`)
const cloudButton = document.querySelector(`#cloud_button`)
const gidgetButton = document.querySelector(`#gidget_button`)

//text on page

const title = document.querySelector(`#title`)
const animalInfo = document.querySelector(`#animal_info`)
const subhead = document.querySelector(`#subhead`)
const instructions = document.querySelector(`#instructions`)
const pettingText = document.querySelector(`#ooh`)
const goHomeText = document.querySelector(`#go_back`)
const sadieSlide = document.querySelector(`#sadie_img_slide`)
const cloudSlide = document.querySelector(`#cloud_img_slide`)
const mannySlide = document.querySelector(`#manny_img_slide`)
const gidgetSlide = document.querySelector(`#gidget_img_slide`)

//image

const animalImage = document.querySelector(`#animal_box`)

// event target and axios call on the same for-loop

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', async (event) => {
        console.log(event.target.type)
        let response = await axios.get(`http://localhost:3001/pets`)
        console.log(response)

        //if the user clicks on ANY button, hide a bunch of stuff, use pointer cursor, add text
        //I can switch these to changing the display to block from none if that would be more proper

        if (event.target.type == `submit`) {
            sadieButton.classList.add(`hide_element`)
            cloudButton.classList.add(`hide_element`)
            mannyButton.classList.add(`hide_element`)
            gidgetButton.classList.add(`hide_element`)
            subhead.classList.add(`hide_element`)
            goHomeText.innerHTML = `Or click here to choose a different furry fiend!`
            goHomeText.style.cursor = `pointer`
            animalImage.style.cursor = `pointer`

        }

        //if the user clicks on a pet, display that pet's info as called from the server
        //note they all have almost the same copy so I may be able to write this in less code? I have the id params set up but not sure of a way to get
        //them without still needing the independent event targets listed, so I'm not sure how much that helps. Would love to see that solution.  

        if (event.target.id == `sadie_button`) {
            console.log(response.data[0])
            animalInfo.innerHTML = `${response.data[0].name} is a ${response.data[0].age}-year-old ${response.data[0].breed} ${response.data[0].species}.
            ${response.data[0].pronoun} loves ${response.data[0].favoriteFood}. ${response.data[0].pronoun}'s a good ${response.data[0].sex}!`
            animalImage.innerHTML = `<img src="images/sadie_starter.jpg">`
            title.innerHTML = `${response.data[0].name}`
            sadieSlide.innerHTML = `Click here to see more ${response.data[0].name}!`
            sadieSlide.style.cursor = `pointer`
            instructions.innerHTML = `Hover your mouse over ${response.data[0].name}'s picture to give ${response.data[0].obj_pronoun} a pet! Pssst, ${response.data[0].obj_pronoun} ${response.data[0].bestFeature} are ${response.data[0].obj_pronoun} best feature!`

        }

        if (event.target.id == `manny_button`) {
            console.log(response.data[1])
            animalInfo.innerHTML = `${response.data[1].name} is a ${response.data[1].age}-year-old ${response.data[1].breed} ${response.data[1].species}.
            ${response.data[1].pronoun} loves ${response.data[1].favoriteFood}. ${response.data[1].pronoun}'s a good ${response.data[1].sex}!`
            animalImage.innerHTML = `<img src="images/manny_starter.jpeg">`
            title.innerHTML = `${response.data[1].name}`
            mannySlide.innerHTML = `Click here to see more ${response.data[1].name}!`
            mannySlide.style.cursor = `pointer`
            instructions.innerHTML = `Hover your mouse over ${response.data[1].name}'s picture to give him a pet! Pssst, ${response.data[1].obj_pronoun} ${response.data[1].bestFeature} is ${response.data[1].obj_pronoun} best feature!`

        }

        if (event.target.id == `gidget_button`) {
            console.log(response.data[2])
            animalInfo.innerHTML = `${response.data[2].name} is a ${response.data[2].age}-year-old ${response.data[2].breed} ${response.data[2].species}.
            ${response.data[2].pronoun} loves ${response.data[2].favoriteFood}. ${response.data[2].pronoun}'s a good ${response.data[2].sex}!`
            animalImage.innerHTML = `<img src="images/gidget_starter.jpg">`
            title.innerHTML = `${response.data[2].name}`
            gidgetSlide.innerHTML = `Click here to see more ${response.data[2].name}!`
            gidgetSlide.style.cursor = `pointer`
            instructions.innerHTML = `Hover your mouse over ${response.data[2].name}'s picture to give ${response.data[2].obj_pronoun} a pet! Pssst, ${response.data[2].obj_pronoun} ${response.data[2].bestFeature} is ${response.data[2].obj_pronoun} best feature!`
        }

        if (event.target.id == `cloud_button`) {
            console.log(response.data[3])
            animalInfo.innerHTML = `${response.data[3].name} is a ${response.data[3].age}-year-old ${response.data[3].breed} ${response.data[3].species}.
            ${response.data[3].pronoun} loves ${response.data[3].favoriteFood}. ${response.data[3].pronoun}'s a good ${response.data[3].sex}!`
            animalImage.innerHTML = `<img src="images/cloud_starter.jpg">`
            title.innerHTML = `${response.data[3].name}`
            cloudSlide.innerHTML = `Click here to see more ${response.data[3].name}!`
            cloudSlide.style.cursor = `pointer`
            instructions.innerHTML = `Hover your mouse over ${response.data[3].name}'s picture to give him a pet! Pssst, ${response.data[3].obj_pronoun} ${response.data[3].bestFeature} are  ${response.data[3].obj_pronoun} best feature!`

        }

    }
    )
}

// When you mouse over the pet picture, a heart animation plays. It stops when you mouse out.
//The image caption can change as well. I didn't care if the captions repeated twice in a row. 

function petPet() {
    console.log(`pet`)
    let petCaptionArray = [`Ooooh, that's the spot!`, `It's been 100 years since my last tummy rub.`, `Bouncy bouncy bouncy!`, `Toy? Toy for me?`, `The rug looks better that way.`, `Cookie now?`, `&#128150; &#128150; &#128150;`, `That poop isn't mine.`, `** happy wiggles **`, `Right there!`, `** happy thumps **`, `Scratch my ears!`, `Do I get a treat for this?`, `I didn't mean to eat your shoes.`]
    const petCaption = petCaptionArray[Math.floor(Math.random() * petCaptionArray.length)]
    document.getElementById("hearts_box").style.display = "block"
    pettingText.innerHTML = petCaption
}

function stopPet() {
    console.log(`stop petting`)
    document.getElementById("hearts_box").style.display = "none"
    pettingText.innerHTML = ``
    // I would love to know how to target something that's inside something else with JS, like if I wanted to get an image that's inside a div and I only have an ID on the div
}

//get random images from the Sadie Image Array without repeating the same image twice. I think I was very close to getting this in an honest way.
//but I couldn't figure out how to get it to properly restart the function at else
//so I added an image that isn't in the array and reset localStorage to something that wouldn't match anything else
//which does what I want
//but I would like to have a better solution
//left some commented out stuff to show what I tried. I also tried putting an extra event listener on the text
//and calling the function on that
//which did not work
//I know I could just put the array in script.js and get this to work, but I really want to get it from the backend

// randomImage()

// function randomImage () {
sadieSlide.addEventListener(`click`, async () => {
    console.log(`hi sadie`)
    let response = await axios.get(`http://localhost:3001/sadie`)


    const sadieImg = response.data[Math.floor(Math.random() * response.data.length)]
    console.log(sadieImg)
    animalImage.innerHTML = `<img src="${sadieImg}">`

    //store and compare to local storage

    if (sadieImg !== (localStorage.getItem(`index`))) {
        animalImage.innerHTML = `<img src="${sadieImg}">`
        localStorage.setItem(`index`, sadieImg)
        console.log(`images don't match`)
        console.log(localStorage)
    }
    else {
        console.log(`images match`)
        animalImage.innerHTML = `<img src="images/sadie_default.png">`
        localStorage.setItem(`index`, 0)
    }
})

// }

// get random images from the Manny Image Array

mannySlide.addEventListener(`click`, async () => {
    console.log(`hi Manny`)
    let response = await axios.get(`http://localhost:3001/manny`)


    const mannyImg = response.data[Math.floor(Math.random() * response.data.length)]
    console.log(mannyImg)
    animalImage.innerHTML = `<img src="${mannyImg}">`


    if (mannyImg !== (localStorage.getItem(`index`))) {
        animalImage.innerHTML = `<img src="${mannyImg}">`
        localStorage.setItem(`index`, mannyImg)
        console.log(`images don't match`)
        console.log(localStorage)
    }
    else {
        console.log(`images match`)
        animalImage.innerHTML = `<img src="images/manny_default.jpg">`
        localStorage.setItem(`index`, 1)
    }
})


// get random Images from the Cloud Array

cloudSlide.addEventListener(`click`, async () => {
    console.log(`hi Cloud`)
    let response = await axios.get(`http://localhost:3001/cloud`)


    const cloudImg = response.data[Math.floor(Math.random() * response.data.length)]
    console.log(cloudImg)
    animalImage.innerHTML = `<img src="${cloudImg}">`


    if (cloudImg !== (localStorage.getItem(`index`))) {
        animalImage.innerHTML = `<img src="${cloudImg}">`
        localStorage.setItem(`index`, cloudImg)
        console.log(`images don't match`)
        console.log(localStorage)
    }
    else {
        console.log(`images match`)
        animalImage.innerHTML = `<img src="images/cloud_default.png">`
        localStorage.setItem(`index`, 2)
    }
})


// get random Images from the Gidget Array

gidgetSlide.addEventListener(`click`, async () => {
    console.log(`hi Gidget`)
    let response = await axios.get(`http://localhost:3001/gidget`)


    const gidgetImg = response.data[Math.floor(Math.random() * response.data.length)]
    console.log(gidgetImg)
    animalImage.innerHTML = `<img src="${gidgetImg}">`


    if (gidgetImg !== (localStorage.getItem(`index`))) {
        animalImage.innerHTML = `<img src="${gidgetImg}">`
        localStorage.setItem(`index`, gidgetImg)
        console.log(`images don't match`)
        console.log(localStorage)
    }
    else {
        console.log(`images match`)
        animalImage.innerHTML = `<img src="images/gidget_default.jpg">`
        localStorage.setItem(`index`, 3)
    }
})


//when you click on the name of the animal, the page reverts to its former state. I am going to end up changing where you click for this to happen


function goHome() {
    if (title.innerHTML !== `Furry Fiends`) {
        animalImage.innerHTML = ``
        animalInfo.innerHTML = ``
        title.innerHTML = `Furry Fiends`
        subhead.classList.remove(`hide_element`)
        sadieButton.classList.remove(`hide_element`)
        cloudButton.classList.remove(`hide_element`)
        mannyButton.classList.remove(`hide_element`)
        gidgetButton.classList.remove(`hide_element`)
        sadieSlide.style.cursor = `default`
        cloudSlide.style.cursor = `default`
        gidgetSlide.style.cursoer = `default`
        mannySlide.style.cursor = `default`
        animalImage.style.cursor = `default`
        goHomeText.style.cursor = `default`
        sadieSlide.innerHTML = ``
        cloudSlide.innerHTML = ``
        mannySlide.innerHTML = ``
        gidgetSlide.innerHTML = ``
        goHomeText.innerHTML = ``
        instructions.innerHTML = ``
    }
}

// event listeners

goHomeText.addEventListener(`click`, goHome)
animalImage.addEventListener(`mouseover`, petPet)
animalImage.addEventListener(`mouseout`, stopPet)
