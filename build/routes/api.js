'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nrdb = require('nrdb');

var _compare = require('../util/compare');

var _compare2 = _interopRequireDefault(_compare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function (app) {
  app.get('/compare/:firstID/:secondID', function () {
    var _ref = _asyncToGenerator(function* (req, res) {
      var firstID = req.params.firstID;
      var secondID = req.params.secondID;


      var deck1 = yield (0, _nrdb.decklist)(firstID);
      var deck2 = yield (0, _nrdb.decklist)(secondID);

      try {
        var first = deck1[0].cards;
        var second = deck2[0].cards;

        res.send((0, _compare2.default)(first, second));
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};