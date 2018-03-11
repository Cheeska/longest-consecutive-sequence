module.exports =function longestConsecutiveLength(array) {

    if (array.length == 0){
        return 0;
    } else if(array.length == 1){
        return 1;
    }

    array.sort(function(left,right){ return left-right;});

    var colConsecutive = 1;
    var arrayColConsecutive = new Array();

    for(var i = 0; i<array.length; i++) {
        if (array[i] - array[i - 1] == 1) {
            colConsecutive++;
        }else if(array[i] - array[i - 1] > 1){
            arrayColConsecutive.push(colConsecutive);
            colConsecutive = 1;

        }
    }

    var numberOf = getMaxOfArray(arrayColConsecutive);

    return numberOf;

}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
