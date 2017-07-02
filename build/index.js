'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _stylus = require('stylus');

var _stylus2 = _interopRequireDefault(_stylus);

var _nib = require('nib');

var _nib2 = _interopRequireDefault(_nib);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _root = require('./routes/root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Dependencies
var app = (0, _express2.default)();

//Routes


//View engine
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Middleware
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

function compile(str, location) {
  return (0, _stylus2.default)(str).set('filename', location).set('compress', true).use((0, _nib2.default)()).import('nib');
}

app.use(_stylus2.default.middleware({
  src: _path2.default.join(__dirname, 'public'),
  compile: compile
}));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

(0, _api2.default)(app);
(0, _root2.default)(app);

// Catch 404
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handling
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { error: err.status });
  console.log(err);
});

var PORT = process.env.PORT || "3000";
app.listen(PORT, function () {
  console.log("App listening on port " + PORT);
});

exports.default = app;