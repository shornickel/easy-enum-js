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

function Enum() {
  var args = Array.from(arguments);
  this.keys = uniq(args.sort());

  for (var i = 0; i < this.keys.length; i++) {
    this[this.keys[i]] = i;
  }

  return this;
}

Enum.prototype.toString = function() {
  return JSON.stringify(this.toObject());
}

Enum.prototype.toObject = function() {
  rObject = new Object(null);

  for (var i = 0; i < this.keys.length; i++) {
    rObject[this.keys[i]] = i;
  }

  return rObject;
}

Enum.prototype.getVal = function(key) {
  if (this[key]) {
    return this[key];
  } else {
    return false;
  }
}

module.exports = Enum;
