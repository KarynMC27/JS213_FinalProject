const pets = [
    {
        name: "Sadie",
        sex: "girl",
        species: "dog",
        breed: "supermutt",
        pronoun: "She",
        obj_pronoun: "her",
        color: "black",
        age: 1,
        bestFeature: "ears",
        favoriteGame: "fetch",
        favoriteFood: "sardines",
        isGood: true
    },

    {
        name: "Manny",
        sex: "boy",
        species: "dog",
        breed: "schnauzer",
        pronoun: "He",
        obj_pronoun: "his",
        color: "salt and pepper",
        age: 1,
        bestFeature: "snoot",
        favoriteFood: "carrots",
        favoriteGame: "chase",
        isGood: true
    },

    {
        name: "Gidget",
        sex: "girl",
        species: "dog",
        breed: "mini australian shepherd",
        pronoun: "She",
        obj_pronoun: "her",
        color: "black tri",
        age: 5,
        bestFeature: "floof",
        favoriteFood: "popcorn",
        favoriteGame: "toys",
        isGood: true
    },

    {
        name: "Cloud",
        sex: "boy",
        species: "bunny",
        breed: "English spot",
        pronoun: "He",
        obj_pronoun: "his",
        color: "white with black spots",
        age: 2,
        bestFeature: "ears",
        favoriteFood: "lettuce",
        favoriteGame: "chew",
        isGood: true
    },

]

const sadiePics = [
]

sadiePics.push(`/finalproject/images/Sadie1.png`)
sadiePics.push(`/finalproject/images/Sadie3.jpeg`)
sadiePics.push(`/finalproject/images/Sadie4.jpg`)
sadiePics.push(`/finalproject/images/Sadie5.jpg`)
sadiePics.push(`/finalproject/images/Sadie6.jpg`)


const cloudPics = [
]

cloudPics.push(`/finalproject/images/Cloud2.jpg`)
cloudPics.push(`/finalproject/images/Cloud3.png`)
cloudPics.push(`/finalproject/images/Cloud4.jpeg`)
cloudPics.push(`/finalproject/images/Cloud5.png`)
cloudPics.push(`/finalproject/images/Cloud6.png`)
cloudPics.push(`/finalproject/images/Cloud7.png`)
cloudPics.push(`/finalproject/images/Cloud8.png`)
cloudPics.push(`/finalproject/images/Cloud9.png`)


const mannyPics = [
]


mannyPics.push(`/finalproject/images/Manny2.jpg`)
mannyPics.push(`/finalproject/images/Manny3.jpeg`)
mannyPics.push(`/finalproject/images/Manny4.jpeg`)
mannyPics.push(`/finalproject/images/Manny5.png`)
mannyPics.push(`/finalproject/images/Manny6.jpg`)
mannyPics.push(`/finalproject/images/Manny7.jpg`)

const gidgetPics = [
]

gidgetPics.push(`/finalproject/images/Gidget2.jpg`)
gidgetPics.push(`/finalproject/images/Gidget3.png`)
gidgetPics.push(`/finalproject/images/Gidget4.jpg`)
gidgetPics.push(`/finalproject/images/Gidget5.jpg`)
gidgetPics.push(`/finalproject/images/Gidget6.jpg`)
gidgetPics.push(`/finalproject/images/Gidget7.jpg`)

const getPets = (req, res) => {
    res.send(pets)
}

const getPet = (req, res) => {
    res.send(pets[req.params.id])
}

const getSadiePics = (req, res) => {
    res.send(sadiePics)
}

const getCloudPics = (req, res) => {
    res.send(cloudPics)
}

const getMannyPics = (req, res) => {
    res.send(mannyPics)
}

const getGidgetPics = (req, res) => {
    res.send(gidgetPics)
}

module.exports = {
    getPets,
    getPet,
    getSadiePics,
    getCloudPics,
    getMannyPics,
    getGidgetPics,
}




