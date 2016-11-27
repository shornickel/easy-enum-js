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
    let args = uniq(arguments.sort());
    this.EKeys = [];
    this.length = args.length;
    for (let i = 0; i < args.length; i++) {
      this[String(args[i])] = i;
      this.EKeys.push(String(args[i]));
    }
  }

  toString() {
    let RString = '{ ';
    for (let i = 0; i < this.length; i++) {
      RString = RString.concat(RString, this.EKeys[i], ': ', String(i), '; ');
    }
    RString = RString.concat(RString, '}');

    return RString;
  }

  toObject() {
    let RObject = new Object(null);
    for (let i = 0; i < this.length; i++) {
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
