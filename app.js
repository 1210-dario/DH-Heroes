const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const views = path.join(__dirname,'views')

app.get('/',(req,res)=>{
    res.sendFile(path.join(views,'index.html'))
});
app.get('/jovenPepe', (req,res)=>{
    res.sendFile(path.join(views,'jovenPepe.html'))
});
app.get('/campistaBartolo', (req,res)=>{
    res.sendFile(path.join(views,'campistaBartolo.html'))
});
app.get('/chicaAndrea', (req,res)=>{
    res.sendFile(path.join(views,'chicaAndrea.html'))
});
app.get('/montaneroEvaristo', (req,res)=>{
    res.sendFile(path.join(views,'montaneroEvaristo.html'))
});
app.get('/cazabichosCornelio', (req,res)=>{
    res.sendFile(path.join(views,'cazabichosCornelio.html'))
});


app.use(express.static('public'));

app.listen(port, ()=>console.log(`Servidor levantado en el puerto: ${port}`));

