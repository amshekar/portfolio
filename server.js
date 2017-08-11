/* --------------------------------------------------------------------------------------------------------------------
<copyright file="server.js" company="Bytes2Bots">
   (c) Copyright 2017
 </copyright>
 <summary>
 Express service
 </summary>
 --------------------------------------------------------------------------------------------------------------------*/
var path = require('path');
var qs = require('querystring');
var async = require('async');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var moment = require('moment');
var request = require('request');
var json = require('json-file');
var status = require('http-status');
var favicon = require('serve-favicon')
var app = express();
app.set('port', process.env.PORT || 1377);
app.use(cors());
app.use(logger('dev'));
app.use('/', express.static(path.join(__dirname, 'app')));
app.use(favicon(path.join(__dirname, 'assets', 'images', 'favicon.ico')));


/*
 |--------------------------------------------------------------------------
 | GET / Landing Page of the APP
 |--------------------------------------------------------------------------
 */
app.get('/',function(req, res){
  console.log(__dirname);
  res.sendFile(path.join(__dirname,'index.html'));
});

/*
 |--------------------------------------------------------------------------
 | GET /api/ping/:Hello  Ping isAlive test method without Authentication
 |--------------------------------------------------------------------------
 */
app.get('/api/ping/:greeting', function (req, res) {
    res.send("Pong from your Designe mate!   " + req.params.greeting );

});



/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(app.get('port'), app.get('host'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
