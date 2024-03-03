Array.prototype._findIndex = function (callbackfn, thisArgs) {
    if (typeof callbackfn === "function") {
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                var result = callbackfn(this[i], i, this);
                if (result) {
                    return i;
                }
            } else {
                return -1;
            }
        }
    } else {
        throw new TypeError(`&{callbackfn} is not function`);
    }
};

var arr = [5, 12, 8, 130, 44].findIndex((e) => e > 13);
console.log(arr);

var arr1 = [5, 12, 8, 130, 44]._findIndex((e) => e > 13);
console.log(arr1);
