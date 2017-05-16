var express = require('express');//запускаем библиотеку express

var app = express();//наш веб-сервер

/*роутинг для приложения: что будет происходить при заходе на опредеоенный URL*/
//request and response - запрос и ответ
app.get('/', function(req,res){
    res.send('Hello API');//ответ
})

var artists = [
  {
    id: 1,
    name: 'Metallica'
  },
  {
    id: 2,
    name: 'Iron Maiden'
  },
  {
    id: 3,
    name: 'Deep Purple'
  }
];

app.get('/artists', function(req,res){
    res.send(artists)
})

app.get('/artists/:id', function(req,res){
    //console.log(req);
    //console.log(req.params.id);
    var artist = artists.find(function (artist){
        return artist.id === Number(req.params.id);
    });
    //ответ
    res.send(artist);
})
app.listen(3012, function(){
    console.log('API app started');
})