//express, https Module use
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

//body-parser Middleware use
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/keyboard', function(req, res){
    //send data
    var data = {
        'type' : 'buttons',
        'buttons' : ['안녕']
    };
//    console.log('aaaa'+req);
    //json syntex res
    res.json(data);
});

app.post('/message', function(req, res){
    //Client Write Msg
    var msg = req.body.content;
    //Res Message
    var send = {};
    
    send = {
                'message':{
                    'text' : '아직 준비가 안되었어요 :('
                }
            }
            res.json(send);
});


http.createServer(app).listen(9111, function(){
    console.log('실행중');
});