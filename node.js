'use strict'

const express= require(`express`);
const cors= require(`cors`);

const app= express();
app.use(express.json());
app.use(cors());

const fs = require(`fs`);

app.post(`/score-data`, (req,resp)=>{
    console.log('Route hit!');
    console.log(req.body);

    fs.readFile(`./data.json`, (err, data)=>{
        let arr=[];
        arr=JSON.parse(data);
        arr.unshift(req.body);

        const data1=JSON.stringify(arr);
        fs.writeFile(`./data.json`, data1, (err)=>{
            console.log(`writting`);
        })
    
    })
})

app.listen(3000, ()=>{
    console.log(`linging...`);
});


app.get(`/scores`,(req, resp)=>{
    fs.readFile(`./data.json`,(err, data)=>{
        const entry= JSON.parse(data);
        resp.json(entry);
    })
})