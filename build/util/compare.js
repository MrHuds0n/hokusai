"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (first, second) {
  var similarities = [];
  var differences = [];

  for (var one in first) {
    var found = false;
    var diff = 0;

    for (var two in second) {
      if (one === two) {
        found = two;
        diff = Math.abs(second[two] - first[two]);
        break;
      }
    }

    if (found) {
      similarities.push({
        "id": found,
        "difference": diff
      });
    } else {
      differences.push({
        "id": one,
        "quantity": first[one]
      });
    }
  }

  for (var _one in second) {
    var _found = false;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = similarities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var each = _step.value;

        if (_one === each.id) {
          _found = true;
          break;
        }
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

    if (!_found) {
      differences.push({
        "id": _one,
        "quantity": second[_one] * -1
      });
    }
  }

  return {
    similarities: similarities,
    differences: differences
  };
};