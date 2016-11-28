'use strict'

function uniq(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}

class Enum {
  constructor() {

    var args = Array.from(arguments);
    args = uniq(args.sort());

    this.EKeys = [];
    this.length = args.length;
    for (var i = 0; i < args.length; i++) {
      this[String(args[i])] = i;
      this.EKeys.push(String(args[i]));
    }
  }

  toString() {
    var RString = '{ ';
    for (var i = 0; i < this.length; i++) {
      RString += this.EKeys[i] + ': '+ String(i) + '; ';
    }
    RString += RString + '}';

    return RString;
  }

  toObject() {
    var RObject = new Object(null);
    for (var i = 0; i < this.length; i++) {
      RObject[this.EKeys[i]] = i;
    }

    return RObject;
  }

  getVal(key) {
    if (this[key]) {
      return this[key];
    } else {
      return false;
    }
  }
}

module.exports = Enum;
