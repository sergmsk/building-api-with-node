var express = require('express');//запускаем библиотеку express

var app = express();//наш веб-сервер

/*роутинг для приложения: что будет происходить при заходе на опредеоенный URL*/
//request and response - запрос и ответ
app.get('/', function(req,res){
    res.send('Hello API');//ответ
})
app.listen(3012, function(){
    console.log('API app started');
})