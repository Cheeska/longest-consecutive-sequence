//module.exports =
    function longestConsecutiveLength(array) {

    if (array.length == 0){
        return 0;
    } else if(array.length == 1){
        return 1;
    }

    array.sort(function(left,right){ return left-right;});

    var colConsecutive = 1;

    for(i = 0; i<array.length; i++){
        

    }

    return array;

}

var array = [100, 4, 200, 1, 3, 2];
const length = longestConsecutiveLength(array);

console.log(length);