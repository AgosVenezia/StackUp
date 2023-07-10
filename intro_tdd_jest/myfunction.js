function myfunction(a) {
    var list = [];
    for (var i = 1; i <= a; i++) {
    list.push(i);
    }
    return list;
   }
   module.exports = myfunction;