import express from 'express'

const app = express()
const PORT = process.env.PORT || 2020

app.use(express.json())


app.listen(PORT, () => {
    console.log('Listening on ' + PORT)
})

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'blutshirt',
        size: 'large'
    })
})

app.post('/tshirt/:id', (req, res) => {
    const {id} = req.params
    const {logo} = req. body
    if(!logo) {
        res.status(418).send({message: 'No logo!'})
    }
    res.send({
        tshirt: `tshirt with your ${logo} and id ${id}`
    })
})