const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const jsonData = require(path.join(__dirname+'/data/data.json'));

const port = 3000;
app.listen(port);

const cities = jsonData.map(x => x.city);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/homepage.html'))});


app.get('/weather', (req,res) => {
    res.render(path.join(__dirname+'/views/weather.ejs'), {data: cities, result: ''})
});

app.post('/weather', (req,res) => {
  const input = req.body.town;
  const result = jsonData.filter(cities => cities.city === input );
  res.render(path.join(__dirname+'/views/weather.ejs'), {data:cities, result: result })
});



