const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = './public/index.html';


const server = express()
  .use(express.static('./public'))
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


const wss = new Server({ server });
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (data) =>{ console.log("Client say :" + data)});
    ws.on('close', () => console.log('Client disconnected'));
});





