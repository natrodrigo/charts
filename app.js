const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const D3Node = require('d3-node')

const d3n = new D3Node()      // initializes D3 with container element
 d3n.createSVG(10,20).append('g') // create SVG w/ 'g' tag and width/height
 d3n.svgString()
 
const jsonParser = bodyParser.json()

const app = express();

const PORT = 5000 || process.env.PORT;
const HOST = '0.0.0.0';

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to my API.'
    })
})


app.listen(PORT, HOST);