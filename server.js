const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const petController = require(`./controllers/PetController.js`)
const app = express()
app.use(cors())

app.get(`/`, (req, res) => {
    res.send({
        msg: `server running`
    })
})

//try app.use if app.listen(express.json()) isn't working
app.use(express.json())
app.listen(PORT, () => {console.log(`working`)}
)

app.get(`/pets`, petController.getPets)
app.get(`/sadie`, petController.getSadiePics)
app.get(`/cloud`, petController.getCloudPics)
app.get(`/manny`, petController.getMannyPics)
app.get(`/gidget`, petController.getGidgetPics)