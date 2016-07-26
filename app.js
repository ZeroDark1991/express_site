import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const env = process.env.NODE_ENV || 'development'

import Router from './routes'

const app = express()

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'assets')))

app.set('views', './views')
app.set('view engine', 'jade')

Router(app)

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

app.listen(80,function(){
	console.log('listening at localhost:3000')
    console.log(path.join(__dirname, 'public'))
})