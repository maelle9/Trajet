
module.exports = {
    evolution: function (a, b){
        if (a == 0){
            return Infinity
        }
        return Math.round(10000 * (b - a) / a) /100
    }
}