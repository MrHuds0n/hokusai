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
  app.get('/', function () {
    var _ref = _asyncToGenerator(function* (req, res) {
      try {
        res.render('index');
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  app.get('/:firstID/:secondID', function () {
    var _ref2 = _asyncToGenerator(function* (req, res) {
      var firstID = req.params.firstID;
      var secondID = req.params.secondID;


      var deck1 = yield (0, _nrdb.decklist)(firstID);
      var deck2 = yield (0, _nrdb.decklist)(secondID);

      try {
        //*
        var first = deck1[0].cards;
        var second = deck2[0].cards;

        var firstCards = [];
        for (var each in first) {
          var c = yield (0, _nrdb.card)(each);
          firstCards.push({
            "card": c[0],
            "quantity": first[each]
          });
        }

        var secondCards = [];
        for (var _each in second) {
          var _c = yield (0, _nrdb.card)(_each);
          secondCards.push({
            "card": _c[0],
            "quantity": second[_each]
          });
        }

        var compared = (0, _compare2.default)(first, second);
        var compareFetched = {
          "differences": [],
          "similarities": []
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = compared.similarities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _each2 = _step.value;

            var _c2 = yield (0, _nrdb.card)(_each2.id);
            compareFetched.similarities.push({
              "card": _c2[0],
              "quantity": _each2.difference
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = compared.differences[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _each3 = _step2.value;

            var _c3 = yield (0, _nrdb.card)(_each3.id);
            compareFetched.differences.push({
              "card": _c3[0],
              "quantity": _each3.quantity
            });
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var obj = {
          firstName: deck1[0].name,
          secondName: deck2[0].name,
          first: firstCards,
          second: secondCards,
          compare: compareFetched
          //*/

        };res.render('decklists', obj);
      } catch (e) {
        console.log(e);
        res.sendStatus(400);
      }
    });

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};