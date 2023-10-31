Array.prototype._findIndex = function (callbackfn, thisArgs) {
    if (typeof callbackfn === "function") {
        for (var idx in this) {
            if (this.hasOwnProperty(idx)) {
                var result = callbackfn(this[idx], idx, this);
                if (result) return idx;
            }
        }
        return -1;
    } else {
        throw new TypeError(`${callbackfn} is not a function`);
    }
};

var arr = ["HTML", "CSS", "JS", "Bootstrap", "ReactJS"]._findIndex((x) => {
    return x.length > 5;
});
console.log(arr);
